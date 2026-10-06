# V25.5.4 — FULL AUDIT: CÂY MỚI + IN 65x100

## 1. Phân công cây mới
- Dropdown kích thước trong phân công dùng **catalog row index hiện tại** làm giá trị UI, thay vì phụ thuộc catalogId để tìm ngược ngay lúc bấm THÊM CÂY.
- Sau khi lấy đúng row, app tạo `plantKey` ổn định để ghi Firestore.
- Luồng tạo đơn ưu tiên xác thực `plantIndex + plantName`, sau đó mới fallback sang key/name+size.
- `size: ""` được coi là hợp lệ cho cây không khai báo kích thước.
- Không truyền object UI/Promise vào Firestore.

## 2. In phiếu
- Giữ khổ 65 x 100 mm cho job `ROLL-CAY-CANH-*`.
- Thêm `FixedAttributesPrintAdapter` để ép WebView layout theo `PrintAttributes` 65x100 thay vì để WebView trả A4 làm thu nhỏ nội dung.
- Báo giá tiếp tục A4.

## 3. Không thay đổi
- Công thức Excel, tồn kho, tiền công, phân quyền, luồng hoàn thành 2 ảnh.
- Không reset dữ liệu Firestore.


## Build audit V25.5.4
- Workflow now builds only the repository root Android project; it no longer falls back to an older versioned ZIP.
- Version is checked as 25.5.4 before Gradle.
- Gradle/Java versions are printed before the build for reproducible diagnostics.
