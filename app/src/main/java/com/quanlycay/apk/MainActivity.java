package com.quanlycay.apk;

import android.app.Activity;
import android.content.ContentValues;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.print.PrintAttributes;
import android.print.PrintManager;
import android.print.PrintDocumentAdapter;
import android.os.CancellationSignal;
import android.os.Bundle;
import android.os.ParcelFileDescriptor;
import android.content.Context;
import android.widget.Toast;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import android.util.Base64;

public class MainActivity extends Activity {
    private static final int FILE_CHOOSER_REQ = 4101;
    private WebView webView;
    private ValueCallback<Uri[]> filePathCallback;
    private Uri cameraOutputUri;

    @Override public void onCreate(Bundle b) {
        super.onCreate(b);
        webView = new WebView(this);
        webView.setWebViewClient(new WebViewClient());
        webView.setWebChromeClient(new AppChromeClient());
        WebSettings s = webView.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccess(true);
        s.setAllowContentAccess(true);
        webView.addJavascriptInterface(new AndroidBridge(), "AndroidBridge");
        webView.loadUrl("file:///android_asset/index.html");
        setContentView(webView);
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

    public class AndroidBridge {
        @JavascriptInterface
        public void printA4Page(String jobName) {
            final String safeName = (jobName == null || jobName.trim().isEmpty()) ? "ROLL-CAY-CANH-BAO-GIA" : jobName.replaceAll("[^a-zA-Z0-9._-]", "_");
            runOnUiThread(() -> {
                try {
                    PrintManager printManager = (PrintManager) getSystemService(Context.PRINT_SERVICE);
                    if (printManager == null) {
                        Toast.makeText(MainActivity.this, "Thiết bị không hỗ trợ in", Toast.LENGTH_SHORT).show();
                        return;
                    }
                    // Đơn hàng dùng đúng khổ tem 65 x 100 mm; báo giá vẫn dùng A4.
                    // PrintAttributes.MediaSize dùng đơn vị mil (1/1000 inch).
                    final boolean orderLabel = safeName.startsWith("ROLL-CAY-CANH-");
                    final PrintAttributes.MediaSize media = orderLabel
                            ? new PrintAttributes.MediaSize("ROLL_GARDEN_65X100", "65 x 100 mm", 2559, 3937)
                            : new PrintAttributes.MediaSize("A4_ROLL_GARDEN", "A4", 8270, 11690);
                    PrintAttributes attributes = new PrintAttributes.Builder()
                            .setMediaSize(media)
                            .setMinMargins(PrintAttributes.Margins.NO_MARGINS)
                            .build();
                    PrintDocumentAdapter delegate = webView.createPrintDocumentAdapter(safeName);
                    printManager.print(safeName, new FixedAttributesPrintAdapter(delegate, attributes), attributes);
                } catch (Exception e) {
                    Toast.makeText(MainActivity.this, "Không thể mở chức năng in: " + e.getMessage(), Toast.LENGTH_LONG).show();
                }
            });
        }

        /**
         * WebView's print adapter can report its own page attributes (often A4).
         * That makes Android's print preview shrink a 65x100mm label into the
         * middle of an A4 sheet. For order labels, force the delegate to lay out
         * against the exact 65x100mm attributes requested by PrintManager.
         */
        private class FixedAttributesPrintAdapter extends PrintDocumentAdapter {
            private final PrintDocumentAdapter delegate;
            private final PrintAttributes forcedAttributes;

            FixedAttributesPrintAdapter(PrintDocumentAdapter delegate, PrintAttributes forcedAttributes) {
                this.delegate = delegate;
                this.forcedAttributes = forcedAttributes;
            }

            @Override
            public void onLayout(PrintAttributes oldAttributes, PrintAttributes newAttributes,
                                 CancellationSignal cancellationSignal, LayoutResultCallback callback,
                                 Bundle extras) {
                delegate.onLayout(oldAttributes, forcedAttributes, cancellationSignal, callback, extras);
            }

            @Override
            public void onWrite(PageRange[] pages, ParcelFileDescriptor destination,
                                CancellationSignal cancellationSignal, WriteResultCallback callback) {
                delegate.onWrite(pages, destination, cancellationSignal, callback);
            }

            @Override
            public void onFinish() {
                delegate.onFinish();
            }
        }

        public void printCurrentPage(String jobName) {
            final String safeName = (jobName == null || jobName.trim().isEmpty()) ? "ROLL-CAY-CANH" : jobName.replaceAll("[^a-zA-Z0-9._-]", "_");
            runOnUiThread(() -> {
                try {
                    PrintManager printManager = (PrintManager) getSystemService(Context.PRINT_SERVICE);
                    if (printManager == null) {
                        Toast.makeText(MainActivity.this, "Thiết bị không hỗ trợ in", Toast.LENGTH_SHORT).show();
                        return;
                    }
                    PrintAttributes attributes = new PrintAttributes.Builder()
                            .setMediaSize(new PrintAttributes.MediaSize("A4_ROLL_GARDEN_ORDER", "A4", 8270, 11690))
                            .setMinMargins(PrintAttributes.Margins.NO_MARGINS)
                            .build();
                    printManager.print(safeName, webView.createPrintDocumentAdapter(safeName), attributes);
                } catch (Exception e) {
                    Toast.makeText(MainActivity.this, "Không thể mở chức năng in: " + e.getMessage(), Toast.LENGTH_LONG).show();
                }
            });
        }

        public boolean saveFile(String filename, String base64, String mimeType) {
            try {
                String safeName = filename == null ? "bao-cao.csv" : filename.replaceAll("[^a-zA-Z0-9._-]", "_");
                byte[] bytes = Base64.decode(base64, Base64.DEFAULT);
                if (Build.VERSION.SDK_INT >= 29) {
                    ContentValues values = new ContentValues();
                    values.put(MediaStore.Downloads.DISPLAY_NAME, safeName);
                    values.put(MediaStore.Downloads.MIME_TYPE,
                            mimeType == null ? "text/csv" : mimeType);
                    values.put(MediaStore.Downloads.RELATIVE_PATH,
                            Environment.DIRECTORY_DOWNLOADS + "/ROLL CAY CANH");
                    values.put(MediaStore.Downloads.IS_PENDING, 1);
                    Uri uri = getContentResolver().insert(
                            MediaStore.Downloads.EXTERNAL_CONTENT_URI, values);
                    if (uri == null) return false;
                    try (OutputStream out = getContentResolver().openOutputStream(uri)) {
                        if (out == null) throw new Exception("Không mở được file");
                        out.write(bytes);
                    }
                    ContentValues done = new ContentValues();
                    done.put(MediaStore.Downloads.IS_PENDING, 0);
                    getContentResolver().update(uri, done, null, null);
                    runOnUiThread(() -> Toast.makeText(MainActivity.this,
                            "Đã lưu: Tải xuống / ROLL CAY CANH / " + safeName,
                            Toast.LENGTH_LONG).show());
                    return true;
                }

                File dir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
                if (!dir.exists() && !dir.mkdirs()) return false;
                File file = new File(dir, safeName);
                try (FileOutputStream out = new FileOutputStream(file)) {
                    out.write(bytes);
                }
                runOnUiThread(() -> Toast.makeText(MainActivity.this,
                        "Đã lưu file trong thư mục Tải xuống",
                        Toast.LENGTH_LONG).show());
                return true;
            } catch (Exception e) {
                runOnUiThread(() -> Toast.makeText(MainActivity.this,
                        "Không lưu được file: " + e.getMessage(), Toast.LENGTH_LONG).show());
                return false;
            }
        }
    }

    @Override public void onBackPressed() {
        if (webView != null && webView.canGoBack()) webView.goBack();
        else super.onBackPressed();
    }
}
