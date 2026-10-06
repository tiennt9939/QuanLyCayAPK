# ROLL CÂY CẢNH Android V25.4.3 — BÁO GIÁ STABLE

Bản này khóa source cho V25.4.3. Không thay đổi luồng nghiệp vụ hiện có ngoài phần Báo giá/PDF.

## PDF A4
- Background ROLL GARDEN đúng file người dùng cung cấp.
- Artwork được giữ nguyên byte; SHA-256: `9c3965014db664df3caa1b42a85488c9a9c5557685e3c55d8b81625729655251`.
- Background được đặt bằng **ảnh thật `<img>`** trên từng trang A4, không phụ thuộc chỉ vào CSS background.
- Báo giá tự chia nhiều trang; mỗi trang đều có background.
- Android dùng `printA4Page()` để mở hộp thoại in/Lưu thành PDF.

## Build guard
Workflow mới không giải nén tất cả ZIP tùy ý. Nó chỉ dùng `ROLL_CAY_CANH_V25_4_3_STABLE.zip` hoặc source Android nằm trực tiếp ở repository root. Điều này loại bỏ nguy cơ GitHub chọn nhầm source cũ.

Trước Gradle, workflow kiểm tra:
- đúng 1 `@JavascriptInterface`;
- background tồn tại và đúng SHA-256;
- XML/JSON hợp lệ;
- JavaScript inline qua `node --check`;
- đúng cấu trúc Android project.

## Kiểm tra cục bộ đã hoàn thành
- Java MainActivity: biên dịch qua `javac` với Android API stubs để kiểm tra cú pháp/type usage: PASS.
- JavaScript inline: `node --check`: PASS.
- AndroidManifest.xml: PASS.
- styles.xml: PASS.
- data.json: PASS.
- Background source: byte-for-byte giống ảnh người dùng cung cấp.

## Giới hạn
Môi trường hiện tại không có Android SDK/Gradle cache đầy đủ để chạy `assembleDebug` tại đây, nên không tuyên bố APK đã được build runtime trên Android trong phiên này. Việc build cuối cùng được giao cho GitHub Actions với workflow đã khóa nguồn và preflight ở trên.
