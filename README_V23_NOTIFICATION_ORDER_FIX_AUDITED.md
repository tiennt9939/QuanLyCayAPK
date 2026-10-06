# ROLL CÂY CẢNH — V23 Notification / Assigned Orders Audit

## Mục tiêu
Sửa lỗi thực tế: Admin đã phân công đơn, chuông trên tài khoản nhân viên hiển thị đúng số đơn (ví dụ 8), nhưng khi mở thông báo ứng dụng lại báo “Hiện không có đơn nào đang chờ xử lý”.

## Nguyên nhân đã xác định trong source V23 được gửi
Luồng `openOrderNotifications()` gọi `refreshOrdersForNotification()`. Hàm này lại bắt buộc gọi `loadPackerRecords()` để đọc Firestore lần nữa. Nếu lần đọc `get()` gặp lỗi/tạm thời trong WebView, hàm cũ trả về `[]`. Trong khi đó listener `onSnapshot()` đã có dữ liệu và đã cập nhật badge lên 8. Kết quả là UI có badge 8 nhưng thao tác bấm chuông nhận một mảng rỗng và báo “không có đơn”.

Ngoài ra source V23 gốc vẫn dùng Firebase Auth persistence `SESSION`, không đúng với mục tiêu giữ phiên ổn định trên Android/WebView.

## Sửa trong bản này
1. `loadPackerRecords()` trả về chính danh sách đơn của tài khoản hiện tại.
2. Lọc thêm `assignedUid === auth.currentUser.uid` ở phía ứng dụng.
3. Nếu listener đã có dữ liệu và lần `get()` tải lại gặp lỗi, không xoá dữ liệu đang có.
4. `refreshOrdersForNotification()` ưu tiên dữ liệu đã được listener xác nhận, sau đó mới thử tải lại.
5. Khi tải lại lỗi, giữ nguyên danh sách đang có thay vì biến thành `[]`.
6. Không gọi `showLoginGate()` chỉ vì trạng thái Auth tạm thời chưa sẵn sàng trong thao tác thông báo.
7. Firebase Auth persistence chuyển từ `SESSION` sang `LOCAL` để giữ phiên trên Android/WebView.
8. Không thay đổi logic phân công, quyền Admin/packer, catalog, rates, dữ liệu lịch sử hay công thức tiền công.

## Kiểm tra đã thực hiện
- Giải nén và đọc trực tiếp source ZIP V23 được người dùng cung cấp.
- Kiểm tra `packingOrders`, `assignedUid`, `onSnapshot`, `loadPackerRecords`, `openOrderNotifications`, `openOrderFromAlert`, `goToPendingOrders`.
- Kiểm tra Firestore Rules đi kèm source: packer chỉ đọc đơn được giao cho chính UID; Admin đọc toàn bộ.
- Tách toàn bộ JavaScript trong `index.html` và chạy `node --check`: PASS.
- Kiểm tra không còn `Auth.Persistence.SESSION`; có 2 vị trí `Auth.Persistence.LOCAL` (khởi tạo và đăng nhập).

## Giới hạn kiểm thử
Không thể trực tiếp chạy APK trên điện thoại thật trong môi trường này. Vì vậy không tuyên bố đã thực hiện thao tác Firebase/Android thực tế trên thiết bị.
