# ROLL CÂY CẢNH V23.1 — FULL STABILITY AUDIT

Bản này giữ nguyên giao diện và các chức năng nghiệp vụ của V23 hiện tại, chỉ gia cố các điểm lỗi đã quan sát thực tế.

## 1. Lỗi Firebase trên màn hình đăng nhập

Triệu chứng: màn hình đăng nhập hiển thị `Firebase chưa được cấu hình` dù file `firebase-config.js` có cấu hình.

Nguyên nhân logic: hàm `available()` yêu cầu cả cấu hình và `window.firebase`. Nếu các file Firebase CDN chưa tải kịp/bị lỗi mạng/WebView, thông báo bị ghi thành "Firebase chưa được cấu hình". Ngoài ra `initPromise` cũ có thể giữ kết quả thất bại và không cho khởi tạo lại.

Đã sửa:
- SDK Firebase được tải có kiểm soát.
- CDN chính: gstatic 10.14.1.
- CDN dự phòng: jsDelivr 10.14.1 và cdnjs 10.14.1.
- Đăng nhập cũng tự thử tải SDK nếu người dùng bấm nút trước khi SDK sẵn sàng.
- Không khóa `initPromise` vĩnh viễn khi SDK chưa tải được.
- Dùng Firebase Auth LOCAL persistence.
- Thông báo lỗi mới phân biệt `Firebase SDK chưa sẵn sàng` với lỗi tài khoản.

## 2. Lỗi chuông 8 đơn nhưng bấm lại báo 0

Nguyên nhân: số badge được tạo bởi Firestore `onSnapshot`, trong khi thao tác bấm chuông có thể đọc lại từ `D.packingOrders`; một luồng render/reconcile khác có thể thay đổi cache này.

Đã sửa:
- `orderNotificationState.rows` trở thành bộ nhớ riêng của listener.
- Badge và danh sách thông báo dùng cùng tập đơn từ listener.
- Click vào đơn ưu tiên `orderNotificationState.rows`.
- Chỉ fallback đọc đúng document khi cần.
- Một lần đọc Cloud rỗng/lỗi không được biến danh sách đang có thành rỗng.
- `showOrderAlert()` tự lấy rows từ notification state nếu caller không truyền rows.
- `maybeAlertForPending()` truyền chính rows mà listener vừa nhận.

## 3. Quyền và dữ liệu

Không thay đổi:
- Firestore Rules hiện có.
- Giao diện hiện tại.
- Danh mục 99 cây.
- 6 nhân viên.
- Đơn giá C6/C7/C9/C10/C11/C12.
- Phân công đơn hàng.
- Chụp ảnh hoàn thành.
- Tiền công và điều chỉnh.
- Nhập kho, báo cáo, sao lưu.

## 4. Kiểm tra source

Đã chạy kiểm tra cú pháp toàn bộ các block JavaScript inline bằng `node --check`: PASS.

Đã kiểm tra các điều kiện source:
- Không còn `Auth.Persistence.SESSION`.
- Có `Auth.Persistence.LOCAL`.
- Có loader Firebase dự phòng.
- Có notification rows cache.
- Listener packer/admin lưu rows vào notification state.
- Click đơn ưu tiên notification state.

## 5. Giới hạn kiểm thử

Môi trường kiểm tra không có Android SDK/Gradle executable và không thể thao tác trực tiếp trên điện thoại của người dùng. Vì vậy không tuyên bố đã chạy APK thật trên thiết bị.

Bản ZIP này được tạo từ đúng source V23 hiện hành đã được người dùng xác nhận các chức năng nghiệp vụ là đúng, và chỉ gia cố các lỗi quan sát được.
