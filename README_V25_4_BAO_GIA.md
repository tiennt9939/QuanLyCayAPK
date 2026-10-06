# V25.4 — BÁO GIÁ CÂY CẢNH

## Nguyên tắc
- Baseline: Android V25.4 hiện hành.
- Không thay đổi luồng đóng hàng, nhập kho, tồn kho, tiền công, phân công đơn và báo cáo hiện có.
- Chức năng báo giá là một module riêng.

## Báo giá
- Chọn cây trực tiếp từ danh mục trong “Theo dõi cây”.
- Tự lấy: tên sản phẩm, kích thước, đơn giá, hình ảnh.
- Có số lượng và tự tính thành tiền.
- Tổng giá tự động.
- Xuất CSV vào Tải xuống / ROLL CAY CANH.
- Xuất PDF qua hộp thoại in A4 của Android; PDF dùng background `quote-background.png` do người dùng cung cấp.

## Quyền mới: Nhân viên thu mua
Role Firebase: `purchaser`
- Chỉ được: `Báo giá`.
- Trong `Điều khiển` chỉ nhìn thấy và thao tác `Danh mục cây`.
- Không nhìn thấy: đóng hàng, nhập kho, theo dõi cây, báo cáo, tài khoản, nhân viên, đơn giá tiền công, tồn đầu kỳ, sao lưu/khôi phục.
- Có quyền đồng bộ thay đổi danh mục cây lên `/apps/roll-cay-canh`.

## Firebase Rules
Đã bổ sung role `purchaser` cho hồ sơ người dùng và quyền đọc/ghi dữ liệu chung `/apps/{appId}` vì danh mục cây hiện đang được lưu trong `data.catalog` của document dùng chung. Không thay đổi quyền của các role hiện có.
