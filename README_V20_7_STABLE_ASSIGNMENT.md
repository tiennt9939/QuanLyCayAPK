# ROLL CÂY CẢNH V20.7 — BẢN ỔN ĐỊNH PHÂN CÔNG

Mục tiêu của bản này là ưu tiên hoạt động thực tế và tương thích với Firestore Rules đang chạy trên project.

## Thay đổi chính
- Admin vẫn là `Quản trị viên`, **không gắn với nhân viên**.
- Không dùng `/config/roll-cay-canh` để đồng bộ nghiệp vụ nữa, nên lỗi `Missing or insufficient permissions` tại `/config` không còn chặn app.
- Danh mục cây, đơn giá và đơn phân công được lưu trong document dùng chung `/apps/roll-cay-canh`, tương thích với Rules cũ đã cho phép Admin/nhân viên hoạt động.
- Đơn phân công được Admin tạo trong mục **Đóng hàng**.
- Chỉ tài khoản có role `packer` và đã liên kết nhân viên mới xuất hiện trong danh sách phân công.
- Nhân viên chỉ thấy đơn được giao cho chính mình.
- Nhân viên hoàn thành đơn phải có ảnh bằng chứng.
- Admin có thể xem/xóa đơn phân công và xem tiền công phát sinh từ đơn hoàn thành.
- Không yêu cầu Publish Rules V20 mới để chức năng phân công hoạt động; bản này cố tình tránh phụ thuộc vào các collection Rules mới.

## Build
GitHub Actions vẫn dùng `gradle assembleDebug`.
Version Android: `20.7.0`.
