# ROLL CÂY CẢNH V25.4.5 — ROOT FIX 3 ĐIỂM

Base: `V2545_ROOT_FIX.zip` / Android V25.4.4.

## Đã sửa

### 1. Cây mới cập nhật vẫn phân công được
- Khi mở màn hình Phân công, Admin ép làm mới `catalog` từ dữ liệu Cloud trước khi dựng danh sách cây.
- Không còn phụ thuộc vào catalog cache cũ của V25.4.3.
- So khớp tên cây/kích thước không còn phụ thuộc chữ hoa/chữ thường.
- Mỗi cây mới được giữ thêm `catalogId/plantKey` ổn định để đơn mới không phụ thuộc việc index danh mục thay đổi.
- Không thay đổi giao diện phân công.

### 2. In đơn hàng
- Sử dụng đúng cầu nối Android A4 đã có sẵn (`printA4Page`).
- Không còn gọi `printCurrentPage`, vì bridge đó chưa được expose qua `@JavascriptInterface`.
- Kích hoạt CSS `print-order` trước khi gọi hộp thoại in.
- Giữ background `order-print-background.jpg`.
- Phiếu A4 gồm cây, size, số lượng, mã đơn, nhân viên, ngày đóng, ngày in và tổng cây.

### 3. Ghi nhận hoàn thành
- Khi nhân viên hoàn thành, Firestore vẫn là nguồn chuẩn: `packingOrders/{id}` → `status=completed`.
- Màn hình nhân viên nay cập nhật chính xác `Đơn hoàn tất = số đơn completed trong ngày`.
- Giữ 2 ảnh proof và tiền công như V25.4.4.

### 4. Quy cách 1 cây
- Firestore Rules trong source được nới từ 2–100 thành 1–100 để đúng với quy tắc `1 cây · không combo`.
- Khi dùng Production Firebase, cần Publish Rules mới sau khi kiểm thử.

## Không thay đổi
- UI V25.4.4.
- Firebase project/schema.
- `packingOrders` là nguồn chuẩn.
- 2 ảnh hoàn thành.
- Báo giá/PDF A4.
