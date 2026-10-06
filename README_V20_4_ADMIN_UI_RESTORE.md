# ROLL CÂY CẢNH V20.4 – Khôi phục giao diện Admin + Phân công trong Đóng hàng

- Admin/Quản lý giữ lại cách nhập đóng hàng thủ công như trước khi có chức năng phân công.
- Chức năng Phân công đơn đóng hàng được đặt ngay trong mục **Đóng hàng**, không làm thay đổi giao diện Điều khiển của Admin.
- Nhân viên đóng hàng chỉ nhìn thấy đơn được phân công, chụp ảnh và hoàn thành.
- Tài khoản Admin không được liên kết với nhân viên.
- Firestore Rules cho phép bootstrap admin ghi dữ liệu dùng chung; cần **Publish** rules mới trên Firebase Console.
