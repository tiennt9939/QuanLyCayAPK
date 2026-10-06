# V20.8 – Khôi phục dữ liệu cấu hình và đồng bộ an toàn

Bản này giữ nguyên toàn bộ chức năng V20.7, chỉ sửa lỗi đồng bộ làm catalog/đơn giá/dữ liệu nhập kho bị Cloud rỗng ghi đè.

## Giữ nguyên
- 99 dòng danh mục cây theo dữ liệu Excel gốc.
- 6 mức đơn giá tiền công: C6 2.000đ, C7 2.000đ, C9 3.000đ, C10 5.000đ, C11 7.000đ, C12 10.000đ/cây.
- Nhập kho hằng ngày.
- Đóng hàng theo cây/kích thước/nhân viên.
- Điều chỉnh tiền công từng nhân viên: số dương để cộng, số âm để trừ; có ghi chú.
- Tồn đầu + nhập - đóng = tồn cuối.
- Phân công đơn đóng hàng, ảnh bằng chứng và quyền Admin/Packer.

## Sửa
Cloud có `catalog: []`, `rates: []`, `daily: []` hoặc `opening: {}` sẽ không còn xoá dữ liệu đang có trên máy. Nếu cấu hình đã rỗng, app tự phục hồi từ `DEFAULT_DATA` và Admin sẽ ghi lại bộ dữ liệu đã phục hồi lên Cloud.
