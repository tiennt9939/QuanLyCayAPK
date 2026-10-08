package com.quanlycay.apk;

import android.app.Activity;
import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.os.Looper;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PageRange;
import android.print.PrintDocumentInfo;
import android.os.CancellationSignal;
import android.os.ParcelFileDescriptor;
import android.print.PrintManager;
import android.provider.MediaStore;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.Toast;

import org.json.JSONTokener;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.regex.Pattern;

import android.util.Base64;

public class MainActivity extends Activity {
    private static final int FILE_CHOOSER_REQ = 4101;
    private static final long PRINT_CAPTURE_TIMEOUT_MS = 12000L;

    private WebView webView;
    private FrameLayout root;
    private WebView activePrintWebView;
    private ValueCallback<Uri[]> filePathCallback;
    private Uri cameraOutputUri;
    private final Handler mainHandler = new Handler(Looper.getMainLooper());

    @Override public void onCreate(Bundle b) {
        super.onCreate(b);

        root = new FrameLayout(this);
        webView = new WebView(this);
        webView.setWebViewClient(new WebViewClient());
        webView.setWebChromeClient(new AppChromeClient());
        WebSettings s = webView.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccess(true);
        s.setAllowContentAccess(true);
        webView.addJavascriptInterface(new AndroidBridge(), "AndroidBridge");
        root.addView(webView, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT));
        setContentView(root);
        webView.loadUrl("file:///android_asset/index.html");
    }

    private class AppChromeClient extends WebChromeClient {
        @Override
        public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> callback,
                                         FileChooserParams params) {
            if (filePathCallback != null) filePathCallback.onReceiveValue(null);
            filePathCallback = callback;
            boolean imageOnly = false;
            String[] accepts = params.getAcceptTypes();
            if (accepts != null) {
                for (String a : accepts) {
                    if (a != null && a.toLowerCase().startsWith("image/")) imageOnly = true;
                }
            }

            if (params.isCaptureEnabled() && imageOnly) {
                launchCamera();
            } else {
                Intent pick = new Intent(Intent.ACTION_OPEN_DOCUMENT);
                pick.addCategory(Intent.CATEGORY_OPENABLE);
                pick.setType(imageOnly ? "image/*" : "*/*");
                startActivityForResult(pick, FILE_CHOOSER_REQ);
            }
            return true;
        }
    }

    private void launchCamera() {
        try {
            Intent camera = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
            if (Build.VERSION.SDK_INT >= 29) {
                ContentValues values = new ContentValues();
                values.put(MediaStore.Images.Media.DISPLAY_NAME,
                        "ROLL_CAY_CANH_" + System.currentTimeMillis() + ".jpg");
                values.put(MediaStore.Images.Media.MIME_TYPE, "image/jpeg");
                values.put(MediaStore.Images.Media.RELATIVE_PATH,
                        Environment.DIRECTORY_PICTURES + "/ROLL CAY CANH");
                cameraOutputUri = getContentResolver().insert(
                        MediaStore.Images.Media.EXTERNAL_CONTENT_URI, values);
                camera.putExtra(MediaStore.EXTRA_OUTPUT, cameraOutputUri);
                camera.addFlags(Intent.FLAG_GRANT_WRITE_URI_PERMISSION | Intent.FLAG_GRANT_READ_URI_PERMISSION);
            }
            startActivityForResult(camera, FILE_CHOOSER_REQ);
        } catch (Exception e) {
            if (filePathCallback != null) filePathCallback.onReceiveValue(null);
            filePathCallback = null;
            cameraOutputUri = null;
            Toast.makeText(this, "Không thể mở camera", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode != FILE_CHOOSER_REQ || filePathCallback == null) return;

        Uri result = null;
        if (resultCode == RESULT_OK) {
            if (cameraOutputUri != null) {
                result = cameraOutputUri;
            } else if (data != null) {
                if (data.getData() != null) {
                    result = data.getData();
                } else if (data.getExtras() != null && data.getExtras().get("data") instanceof Bitmap) {
                    result = saveLegacyCameraBitmap((Bitmap) data.getExtras().get("data"));
                }
            }
        }

        filePathCallback.onReceiveValue(result == null ? null : new Uri[]{result});
        filePathCallback = null;
        if (result == null && cameraOutputUri != null) {
            try { getContentResolver().delete(cameraOutputUri, null, null); } catch (Exception ignored) {}
        }
        cameraOutputUri = null;
    }

    private Uri saveLegacyCameraBitmap(Bitmap bitmap) {
        try {
            ContentValues values = new ContentValues();
            values.put(MediaStore.Images.Media.DISPLAY_NAME,
                    "ROLL_CAY_CANH_" + System.currentTimeMillis() + ".jpg");
            values.put(MediaStore.Images.Media.MIME_TYPE, "image/jpeg");
            Uri uri = getContentResolver().insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, values);
            if (uri == null) return null;
            try (OutputStream out = getContentResolver().openOutputStream(uri)) {
                if (out == null || !bitmap.compress(Bitmap.CompressFormat.JPEG, 88, out)) return null;
            }
            return uri;
        } catch (Exception e) {
            return null;
        }
    }

    /**
     * Capture only the prepared print area + the page <head>. This avoids sending the
     * entire live WebView DOM into Android's print engine and avoids re-running the app
     * scripts in the print WebView.
     */
    private static final String CAPTURE_PRINT_HTML_JS =
            "(function(){" +
            "var ids=['orderPrintArea','quotePdfPrint'];" +
            "var el=null;" +
            "for(var i=0;i<ids.length;i++){var x=document.getElementById(ids[i]);" +
            "if(x&&x.innerHTML&&((x.getAttribute('aria-hidden')==='false')||x.classList.contains('show'))){el=x;break;}}" +
            "if(!el)return '';" +
            "function attrs(node){var s='';for(var i=0;i<node.attributes.length;i++){var a=node.attributes[i];" +
            "s+=' '+a.name+'=\\\"'+String(a.value).replace(/&/g,'&amp;').replace(/\\\"/g,'&quot;')+'\\\"';}return s;}" +
            "return '<!doctype html><html'+attrs(document.documentElement)+'><head>'+document.head.innerHTML+'</head><body'+attrs(document.body)+'>'+el.outerHTML+'</body></html>';" +
            "})()";

    private String decodeJavascriptString(String raw) throws Exception {
        Object value = new JSONTokener(raw == null ? "null" : raw).nextValue();
        if (!(value instanceof String)) return "";
        return (String) value;
    }

    private String sanitizePrintHtml(String html) {
        if (html == null) return "";
        return Pattern.compile("<script\\b[^>]*>.*?</script>", Pattern.CASE_INSENSITIVE | Pattern.DOTALL)
                .matcher(html).replaceAll("");
    }

    private PrintAttributes buildPrintAttributes(boolean orderLabel) {
        if (orderLabel) {
            return new PrintAttributes.Builder()
                    .setMediaSize(new PrintAttributes.MediaSize(
                            "ROLL_GARDEN_65X100", "65 x 100 mm", 2559, 3937))
                    .setMinMargins(PrintAttributes.Margins.NO_MARGINS)
                    .build();
        }
        return new PrintAttributes.Builder()
                .setMediaSize(PrintAttributes.MediaSize.ISO_A4)
                .setMinMargins(PrintAttributes.Margins.NO_MARGINS)
                .build();
    }

    private void cleanupPrintWebView(WebView printView) {
        if (printView == null) return;
        try { printView.stopLoading(); } catch (Exception ignored) {}
        try { printView.setWebViewClient(null); } catch (Exception ignored) {}
        try { printView.destroy(); } catch (Exception ignored) {}
        if (root != null) {
            try { root.removeView(printView); } catch (Exception ignored) {}
        }
        if (activePrintWebView == printView) activePrintWebView = null;
    }

    private void startIsolatedPrint(String jobName, String html, PrintAttributes attributes) {
        if (html == null || html.trim().length() < 50) {
            Toast.makeText(this, "Không lấy được nội dung để in", Toast.LENGTH_SHORT).show();
            return;
        }
        if (activePrintWebView != null) {
            cleanupPrintWebView(activePrintWebView);
        }

        final WebView printView = new WebView(this);
        activePrintWebView = printView;
        printView.setLayerType(View.LAYER_TYPE_SOFTWARE, null);
        WebSettings ps = printView.getSettings();
        ps.setJavaScriptEnabled(false);
        ps.setDomStorageEnabled(false);
        ps.setAllowFileAccess(true);
        ps.setAllowContentAccess(true);

        FrameLayout.LayoutParams lp = new FrameLayout.LayoutParams(2, 2);
        lp.leftMargin = 1;
        lp.topMargin = 1;
        root.addView(printView, lp);

        final boolean[] started = {false};
        final Runnable start = () -> {
            if (started[0] || activePrintWebView != printView) return;
            started[0] = true;
            try {
                PrintManager printManager = (PrintManager) getSystemService(Context.PRINT_SERVICE);
                if (printManager == null) {
                    cleanupPrintWebView(printView);
                    Toast.makeText(this, "Thiết bị không hỗ trợ in", Toast.LENGTH_SHORT).show();
                    return;
                }
                PrintDocumentAdapter delegate = printView.createPrintDocumentAdapter(jobName);
                if (delegate == null) {
                    cleanupPrintWebView(printView);
                    Toast.makeText(this, "Không thể tạo tài liệu in", Toast.LENGTH_SHORT).show();
                    return;
                }
                printManager.print(jobName, new ReleaseAfterPrintAdapter(delegate, printView), attributes);
            } catch (Throwable e) {
                cleanupPrintWebView(printView);
                Toast.makeText(this, "Không thể mở chức năng in: " + safeError(e), Toast.LENGTH_LONG).show();
            }
        };

        printView.setWebViewClient(new WebViewClient() {
            @Override public void onPageFinished(WebView view, String url) {
                mainHandler.postDelayed(start, 250);
            }
        });

        printView.loadDataWithBaseURL("file:///android_asset/", html, "text/html", "UTF-8", null);
        mainHandler.postDelayed(() -> {
            if (!started[0]) start.run();
        }, 3500);
        mainHandler.postDelayed(() -> {
            if (activePrintWebView == printView && !started[0]) {
                cleanupPrintWebView(printView);
                Toast.makeText(this, "Không thể chuẩn bị nội dung in. Vui lòng thử lại.", Toast.LENGTH_LONG).show();
            }
        }, PRINT_CAPTURE_TIMEOUT_MS);
    }

    private String safeError(Throwable e) {
        String m = e == null ? "" : e.getMessage();
        if (m == null || m.trim().isEmpty()) return e == null ? "Lỗi không xác định" : e.getClass().getSimpleName();
        return m;
    }

    private class ReleaseAfterPrintAdapter extends PrintDocumentAdapter {
        private final PrintDocumentAdapter delegate;
        private final WebView printView;

        ReleaseAfterPrintAdapter(PrintDocumentAdapter delegate, WebView printView) {
            this.delegate = delegate;
            this.printView = printView;
        }

        @Override public void onStart() {
            delegate.onStart();
        }

        @Override
        public void onLayout(PrintAttributes oldAttributes, PrintAttributes newAttributes,
                              android.os.CancellationSignal cancellationSignal,
                              LayoutResultCallback callback, Bundle extras) {
            delegate.onLayout(oldAttributes, newAttributes, cancellationSignal, callback, extras);
        }

        @Override
        public void onWrite(android.print.PageRange[] pages,
                             android.os.ParcelFileDescriptor destination,
                             android.os.CancellationSignal cancellationSignal,
                             WriteResultCallback callback) {
            delegate.onWrite(pages, destination, cancellationSignal, callback);
        }

        @Override public void onFinish() {
            try {
                delegate.onFinish();
            } finally {
                cleanupPrintWebView(printView);
            }
        }
    }

    private void startPdfExport(String jobName, String html) {
        if (html == null || html.trim().length() < 50) {
            Toast.makeText(this, "Không lấy được nội dung báo giá", Toast.LENGTH_SHORT).show();
            return;
        }

        if (activePrintWebView != null) {
            cleanupPrintWebView(activePrintWebView);
        }

        final WebView printView = new WebView(this);
        activePrintWebView = printView;
        printView.setLayerType(View.LAYER_TYPE_SOFTWARE, null);

        WebSettings ps = printView.getSettings();
        ps.setJavaScriptEnabled(false);
        ps.setDomStorageEnabled(false);
        ps.setAllowFileAccess(true);
        ps.setAllowContentAccess(true);

        FrameLayout.LayoutParams lp = new FrameLayout.LayoutParams(2, 2);
        lp.leftMargin = 1;
        lp.topMargin = 1;
        root.addView(printView, lp);

        final String safeName =
                (jobName == null || jobName.trim().isEmpty())
                        ? "Bao-gia-ROLL-GARDEN"
                        : jobName.replaceAll("[^a-zA-Z0-9._-]", "_");

        final boolean[] started = {false};

        final Runnable startPrint = () -> {
            if (started[0] || activePrintWebView != printView) return;
            started[0] = true;
            try {
                PrintManager printManager =
                        (PrintManager) getSystemService(Context.PRINT_SERVICE);

                if (printManager == null) {
                    cleanupPrintWebView(printView);
                    Toast.makeText(MainActivity.this,
                            "Thiết bị không hỗ trợ in/PDF", Toast.LENGTH_LONG).show();
                    return;
                }

                PrintDocumentAdapter adapter =
                        printView.createPrintDocumentAdapter(safeName);

                if (adapter == null) {
                    cleanupPrintWebView(printView);
                    Toast.makeText(MainActivity.this,
                            "Không thể tạo tài liệu báo giá", Toast.LENGTH_LONG).show();
                    return;
                }

                printManager.print(
                        safeName,
                        new ReleaseAfterPrintAdapter(adapter, printView),
                        buildPrintAttributes(false)
                );
            } catch (Throwable e) {
                cleanupPrintWebView(printView);
                Toast.makeText(MainActivity.this,
                        "Không thể mở chức năng PDF: " + safeError(e),
                        Toast.LENGTH_LONG).show();
            }
        };

        printView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageFinished(WebView view, String url) {
                mainHandler.postDelayed(startPrint, 300);
            }
        });

        printView.loadDataWithBaseURL(
                "file:///android_asset/",
                html,
                "text/html",
                "UTF-8",
                null
        );

        mainHandler.postDelayed(
                () -> {
                    if (!started[0]) startPrint.run();
                },
                3500
        );

        mainHandler.postDelayed(
                () -> {
                    if (activePrintWebView == printView && !started[0]) {
                        cleanupPrintWebView(printView);
                        Toast.makeText(MainActivity.this,
                                "Không thể chuẩn bị báo giá để xuất PDF",
                                Toast.LENGTH_LONG).show();
                    }
                },
                PRINT_CAPTURE_TIMEOUT_MS
        );
    }

    private void savePdfToDownloads(String jobName, File tmp) throws Exception {
        String name = (jobName == null || jobName.trim().isEmpty()
                ? "Bao-gia-ROLL-GARDEN"
                : jobName).replaceAll("[^a-zA-Z0-9._-]", "_");

        if (!name.toLowerCase().endsWith(".pdf")) name += ".pdf";

        if (Build.VERSION.SDK_INT >= 29) {
            ContentValues values = new ContentValues();
            values.put(MediaStore.Downloads.DISPLAY_NAME, name);
            values.put(MediaStore.Downloads.MIME_TYPE, "application/pdf");
            values.put(MediaStore.Downloads.RELATIVE_PATH,
                    Environment.DIRECTORY_DOWNLOADS + "/ROLL CAY CANH");
            values.put(MediaStore.Downloads.IS_PENDING, 1);

            Uri uri = getContentResolver().insert(
                    MediaStore.Downloads.EXTERNAL_CONTENT_URI,
                    values);

            if (uri == null) {
                throw new Exception("Không tạo được file trong Tải xuống");
            }

            try (InputStream in = new FileInputStream(tmp);
                 OutputStream out = getContentResolver().openOutputStream(uri)) {

                if (out == null) {
                    throw new Exception("Không mở được file đích");
                }

                byte[] buf = new byte[8192];
                int n;

                while ((n = in.read(buf)) > 0) {
                    out.write(buf, 0, n);
                }
            }

            ContentValues done = new ContentValues();
            done.put(MediaStore.Downloads.IS_PENDING, 0);
            getContentResolver().update(uri, done, null, null);

        } else {
            File dir = Environment.getExternalStoragePublicDirectory(
                    Environment.DIRECTORY_DOWNLOADS);

            if (!dir.exists() && !dir.mkdirs()) {
                throw new Exception("Không tạo được thư mục Tải xuống");
            }

            try (FileInputStream in = new FileInputStream(tmp);
                 FileOutputStream out = new FileOutputStream(new File(dir, name))) {

                byte[] buf = new byte[8192];
                int n;

                while ((n = in.read(buf)) > 0) {
                    out.write(buf, 0, n);
                }
            }
        }

        Toast.makeText(
                this,
                "✅ Đã xuất PDF: Tải xuống / ROLL CAY CANH / " + name,
                Toast.LENGTH_LONG
        ).show();

        if (webView != null) {
            webView.evaluateJavascript(
                    "window.finishQuotePdfExport&&window.finishQuotePdfExport(true)",
                    null
            );
        }
    }

    public class AndroidBridge {

        @JavascriptInterface
        public void printA4Page(String jobName) {
            final String safeName =
                    (jobName == null || jobName.trim().isEmpty())
                            ? "ROLL-CAY-CANH-BAO-GIA"
                            : jobName.replaceAll("[^a-zA-Z0-9._-]", "_");

            final boolean orderLabel = safeName.startsWith("ROLL-CAY-CANH-");

            runOnUiThread(() -> {
                try {
                    if (webView == null) {
                        Toast.makeText(
                                MainActivity.this,
                                "WebView chưa sẵn sàng",
                                Toast.LENGTH_SHORT
                        ).show();
                        return;
                    }

                    final PrintAttributes attributes =
                            buildPrintAttributes(orderLabel);

                    webView.evaluateJavascript(
                            CAPTURE_PRINT_HTML_JS,
                            raw -> {
                                try {
                                    final String html =
                                            sanitizePrintHtml(
                                                    decodeJavascriptString(raw)
                                            );

                                    startIsolatedPrint(
                                            safeName,
                                            html,
                                            attributes
                                    );
                                } catch (Exception e) {
                                    Toast.makeText(
                                            MainActivity.this,
                                            "Không chuẩn bị được nội dung in: "
                                                    + safeError(e),
                                            Toast.LENGTH_LONG
                                    ).show();
                                }
                            }
                    );

                } catch (Throwable e) {
                    Toast.makeText(
                            MainActivity.this,
                            "Không thể mở chức năng in: "
                                    + safeError(e),
                            Toast.LENGTH_LONG
                    ).show();
                }
            });
        }

        @JavascriptInterface
        public void printOrder65x100(String jobName) {
            final String safeName =
                    (jobName == null || jobName.trim().isEmpty()
                            ? "ROLL-CAY-CANH-ORDER-65X100"
                            : jobName)
                            .replaceAll("[^a-zA-Z0-9._-]", "_");

            runOnUiThread(() -> {
                if (webView == null) {
                    Toast.makeText(
                            MainActivity.this,
                            "WebView chưa sẵn sàng",
                            Toast.LENGTH_SHORT
                    ).show();
                    return;
                }

                webView.evaluateJavascript(
                        CAPTURE_PRINT_HTML_JS,
                        raw -> {
                            try {
                                startIsolatedPrint(
                                        safeName,
                                        sanitizePrintHtml(
                                                decodeJavascriptString(raw)
                                        ),
                                        buildPrintAttributes(true)
                                );
                            } catch (Exception e) {
                                Toast.makeText(
                                        MainActivity.this,
                                        "Không chuẩn bị được đơn in: "
                                                + safeError(e),
                                        Toast.LENGTH_LONG
                                ).show();
                            }
                        }
                );
            });
        }

        /*
         * Interface #3
         * Native bridge cho OCR nhãn vận chuyển.
         */
        @JavascriptInterface
        public void ocrShippingImage(String imageData) {
            final boolean hasImage =
                    imageData != null
                            && !imageData.trim().isEmpty();

            runOnUiThread(() ->
                    Toast.makeText(
                            MainActivity.this,
                            hasImage
                                    ? "📷 Đã nhận ảnh OCR"
                                    : "⚠️ Ảnh OCR rỗng",
                            Toast.LENGTH_SHORT
                    ).show()
            );
        }

        /*
         * Interface #4
         * Native bridge dành cho FlashLabel.
         */
        @JavascriptInterface
        public void sendToFlashLabel(String payload) {
            final boolean hasPayload =
                    payload != null
                            && !payload.trim().isEmpty();

            runOnUiThread(() ->
                    Toast.makeText(
                            MainActivity.this,
                            hasPayload
                                    ? "🖨️ Đã nhận dữ liệu FlashLabel"
                                    : "⚠️ Dữ liệu FlashLabel rỗng",
                            Toast.LENGTH_SHORT
                    ).show()
            );
        }

        @JavascriptInterface
        public void exportPdf(String jobName) {
            final String safeName =
                    (jobName == null || jobName.trim().isEmpty()
                            ? "Bao-gia-ROLL-GARDEN"
                            : jobName)
                            .replaceAll("[^a-zA-Z0-9._-]", "_");

            runOnUiThread(() -> {
                if (webView == null) {
                    Toast.makeText(
                            MainActivity.this,
                            "WebView chưa sẵn sàng",
                            Toast.LENGTH_SHORT
                    ).show();
                    return;
                }

                webView.evaluateJavascript(
                        CAPTURE_PRINT_HTML_JS,
                        raw -> {
                            try {
                                startPdfExport(
                                        safeName,
                                        sanitizePrintHtml(
                                                decodeJavascriptString(raw)
                                        )
                                );
                            } catch (Exception e) {
                                Toast.makeText(
                                        MainActivity.this,
                                        "Không chuẩn bị được PDF: "
                                                + safeError(e),
                                        Toast.LENGTH_LONG
                                ).show();
                            }
                        }
                );
            });
        }

        public void printCurrentPage(String jobName) {
            final String safeName =
                    (jobName == null || jobName.trim().isEmpty())
                            ? "ROLL-CAY-CANH"
                            : jobName.replaceAll(
                                    "[^a-zA-Z0-9._-]",
                                    "_"
                            );

            runOnUiThread(() -> {
                if (webView == null) {
                    Toast.makeText(
                            MainActivity.this,
                            "WebView chưa sẵn sàng",
                            Toast.LENGTH_SHORT
                    ).show();
                    return;
                }

                final PrintAttributes attributes =
                        buildPrintAttributes(false);

                webView.evaluateJavascript(
                        CAPTURE_PRINT_HTML_JS,
                        raw -> {
                            try {
                                final String html =
                                        sanitizePrintHtml(
                                                decodeJavascriptString(raw)
                                        );

                                startIsolatedPrint(
                                        safeName,
                                        html,
                                        attributes
                                );
                            } catch (Exception e) {
                                Toast.makeText(
                                        MainActivity.this,
                                        "Không chuẩn bị được nội dung in: "
                                                + safeError(e),
                                        Toast.LENGTH_LONG
                                ).show();
                            }
                        }
                );
            });
        }

        public boolean saveFile(
                String filename,
                String base64,
                String mimeType
        ) {
            try {
                String safeName =
                        filename == null
                                ? "bao-cao.csv"
                                : filename.replaceAll(
                                        "[^a-zA-Z0-9._-]",
                                        "_"
                                );

                if (!safeName.toLowerCase().endsWith(".csv")) {
                    safeName += ".csv";
                }

                final String outputName = safeName;

                byte[] bytes = Base64.decode(
                        base64 == null ? "" : base64,
                        Base64.DEFAULT
                );

                if (bytes.length == 0) {
                    throw new Exception("Nội dung file rỗng");
                }

                if (Build.VERSION.SDK_INT >= 29) {

                    ContentValues values = new ContentValues();

                    values.put(
                            MediaStore.Downloads.DISPLAY_NAME,
                            outputName
                    );

                    values.put(
                            MediaStore.Downloads.MIME_TYPE,
                            mimeType == null
                                    ? "text/csv"
                                    : mimeType
                    );

                    values.put(
                            MediaStore.Downloads.RELATIVE_PATH,
                            Environment.DIRECTORY_DOWNLOADS
                                    + "/ROLL CAY CANH"
                    );

                    values.put(
                            MediaStore.Downloads.IS_PENDING,
                            1
                    );

                    Uri uri =
                            getContentResolver().insert(
                                    MediaStore.Downloads.EXTERNAL_CONTENT_URI,
                                    values
                            );

                    if (uri == null) {
                        throw new Exception(
                                "Không tạo được file trong Tải xuống"
                        );
                    }

                    try (OutputStream out =
                                 getContentResolver()
                                         .openOutputStream(uri)) {

                        if (out == null) {
                            throw new Exception(
                                    "Không mở được file đích"
                            );
                        }

                        out.write(bytes);
                        out.flush();
                    }

                    ContentValues done =
                            new ContentValues();

                    done.put(
                            MediaStore.Downloads.IS_PENDING,
                            0
                    );

                    getContentResolver().update(
                            uri,
                            done,
                            null,
                            null
                    );

                    runOnUiThread(() ->
                            Toast.makeText(
                                    MainActivity.this,
                                    "✅ Đã xuất file: Tải xuống / ROLL CAY CANH / "
                                            + outputName,
                                    Toast.LENGTH_LONG
                            ).show()
                    );

                    return true;
                }

                File dir =
                        Environment.getExternalStoragePublicDirectory(
                                Environment.DIRECTORY_DOWNLOADS
                        );

                if (!dir.exists() && !dir.mkdirs()) {
                    throw new Exception(
                            "Không tạo được thư mục Tải xuống"
                    );
                }

                File file =
                        new File(dir, outputName);

                try (FileOutputStream out =
                             new FileOutputStream(file)) {

                    out.write(bytes);
                    out.flush();
                }

                runOnUiThread(() ->
                        Toast.makeText(
                                MainActivity.this,
                                "✅ Đã lưu file trong thư mục Tải xuống / "
                                        + outputName,
                                Toast.LENGTH_LONG
                        ).show()
                );

                return true;

            } catch (Exception e) {

                runOnUiThread(() ->
                        Toast.makeText(
                                MainActivity.this,
                                "❌ Không lưu được file: "
                                        + safeError(e),
                                Toast.LENGTH_LONG
                        ).show()
                );

                return false;
            }
        }
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onDestroy() {
        try {
            cleanupPrintWebView(activePrintWebView);
        } catch (Exception ignored) {}

        try {
            mainHandler.removeCallbacksAndMessages(null);
        } catch (Exception ignored) {}

        try {
            if (webView != null) {
                webView.destroy();
            }
        } catch (Exception ignored) {}

        super.onDestroy();
    }
}
