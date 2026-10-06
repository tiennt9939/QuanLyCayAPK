# V25.4.2 — AUDIT QUYỀN DANH MỤC CÂY

## Phát hiện
V25.4.1 đã có `ROLE_PERMS.admin` chứa `catalog`, nhưng lớp kiểm tra quyền dựa hoàn toàn vào bảng quyền. Trong tình huống profile/role bị lệch tạm thời, Admin có thể bị báo không có quyền dù giao diện vẫn hiện chức năng.

## Cách xử lý
1. `can(permission)` xác nhận Admin luôn có toàn quyền nghiệp vụ.
2. `savePlantEdit()` bắt buộc có quyền `catalog` trước khi thay đổi dữ liệu.
3. `deletePlant()` bắt buộc có quyền `catalog` trước khi ẩn cây.
4. Procurement vẫn chỉ có `quote` + `catalog`.
5. Không thay đổi quyền packer/warehouse/manager.
6. Không thay đổi Firestore Rules vì Rules hiện tại đã cho Admin ghi `/apps/roll-cay-canh` và procurement ghi dữ liệu chung.

## Mục tiêu test
- Admin: thêm/sửa/ẩn cây + sửa ảnh + giá + kích thước + đồng bộ thành công.
- Procurement: thêm/sửa/ẩn cây + báo giá + PDF/CSV; không thấy phần còn lại của Điều khiển.
- Packer/warehouse/manager: không có quyền chỉnh catalog.
- Sau đăng xuất/đăng nhập, catalog vẫn giữ nguyên.
