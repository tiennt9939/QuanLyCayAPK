# ROLL CÂY CẢNH Android V25.4.2

Bản nâng cấp trực tiếp từ Android V25.4 GOLDEN BASELINE.

## 1. Báo giá
- Có tab **Báo giá**.
- Chọn cây từ đúng danh mục cây trong **Theo dõi cây**.
- Tự lấy tên sản phẩm, kích thước, giá và hình ảnh.
- Thêm nhiều loại cây, nhập số lượng, tự tính thành tiền và tổng giá.
- Xuất CSV.
- Xuất PDF A4 qua chức năng in của Android; background chính là `quote-background.png` do người dùng cung cấp.
- PDF gồm tên sản phẩm, kích thước, số lượng, đơn giá, thành tiền, tổng giá và thông tin khách hàng/ghi chú.

## 2. Nhân viên thu mua
Role Firebase chuẩn: `procurement`.

Quyền duy nhất:
- Báo giá.
- Điều khiển → Danh mục cây.

Ẩn hoàn toàn:
- Tổng quan
- Đóng hàng
- Nhập kho
- Theo dõi cây
- Báo cáo
- Nhân viên
- Đơn giá tiền công
- Tồn đầu kỳ
- Sao lưu dữ liệu
- Tài khoản & phân quyền

`purchaser` vẫn được đọc như alias cũ để không làm mất tài khoản đã tồn tại.

## 3. Fix lỗi gán quyền
- Không còn yêu cầu Admin nhập mã quyền bằng hộp thoại prompt.
- Admin chọn quyền từ danh sách rõ ràng.
- Khi lưu, role được ghi đè thành đúng **một quyền duy nhất**.
- Gán Thu mua sẽ ghi `role = procurement`.
- Không tự cộng thêm quyền Kho hoặc Đóng hàng.

## 4. Firebase Rules
Rules đã bổ sung `procurement` và alias `purchaser` cho `/users` và dữ liệu chung `/apps/roll-cay-canh`, vì catalog hiện tại của V25.4 nằm trong `data.catalog`.

**Lưu ý:** file rules này phải được Publish vào đúng Firebase project đang dùng. Không thay đổi bất kỳ dữ liệu nghiệp vụ nào.


## V25.4.2 — FIX QUYỀN DANH MỤC CÂY
- Giữ nguyên toàn bộ chức năng Báo giá, PDF background, CSV và quyền Nhân viên thu mua.
- Admin luôn có quyền `catalog` ở lớp UI/logic, kể cả khi cấu hình quyền có sai lệch.
- Thêm kiểm tra quyền trực tiếp vào thao tác **Lưu/Sửa/Xóa (ẩn) cây** để tránh trạng thái giao diện cho phép nhưng phiên đăng nhập lại từ chối hoặc ngược lại.
- Không thay đổi Firestore Rules nghiệp vụ hiện tại. Rules hiện tại đã cho Admin ghi `/apps/roll-cay-canh`; procurement được ghi dữ liệu chung để xử lý danh mục.
- Không thay đổi `packingOrders`, tồn kho, tiền công, báo cáo hay dữ liệu sản xuất.
