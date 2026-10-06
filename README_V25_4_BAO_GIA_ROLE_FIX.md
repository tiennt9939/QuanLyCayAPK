# V25.4 — BÁO GIÁ + FIX PHÂN QUYỀN THU MUA

## Root cause
- Bản trước dùng role `purchaser` cho Nhân viên thu mua nhưng màn hình đổi quyền dùng prompt nhập mã quyền, dễ nhập sai và không có lựa chọn trực quan.
- Role mới được chuẩn hóa thành `procurement`.
- `purchaser` vẫn được hỗ trợ như alias cũ để không làm mất tài khoản đã tạo trước đó.

## Quyền procurement
- Báo giá.
- Điều khiển → Danh mục cây.
- Không có: Đóng hàng, Nhập kho, Theo dõi cây, Báo cáo, Nhân viên, Đơn giá tiền công, Tồn đầu kỳ, Sao lưu, Tài khoản.

## Không thay đổi
- Android V25.4 business flow hiện có.
- packingOrders.
- tiền công.
- tồn kho.
- báo cáo.
- dữ liệu Firebase production.

## Quy tắc khi đổi quyền
Màn hình Admin giờ dùng danh sách chọn quyền và ghi đè đúng một role duy nhất. Không còn nhập tay `manager/packer/...` bằng prompt.
