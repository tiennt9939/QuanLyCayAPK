# Công thức bám sát Excel

## Tiền công từng nhân viên
Mỗi dòng cây trong ngày lấy **Kích thước** ở cột C và tra **Đơn giá công** trong `Danh_Muc_Cay!F:G` bằng tra cứu chính xác.

- Tiền công Luân lớn = số cây Luân lớn × đơn giá kích thước.
- Tương tự cho Luân nhỏ, Huy, Mi, Hưng, Bé Hai.
- Tiền công của từng nhân viên trong ngày = cộng tiền công của tất cả các loại cây trong ngày.
- Báo cáo = cộng tiền công từng ngày của từng nhân viên trong khoảng ngày chọn.
- Chu kỳ trả lương = các kỳ 7 ngày, bắt đầu 01/09/2026.

Tương ứng các công thức Excel: `VLOOKUP(C17,Danh_Muc_Cay!$F$5:$G$135,2,FALSE)*F17` và các cột nhân viên khác; `J5:J10` là tổng tiền công từng nhân viên trong ngày.

## Xuất – nhập – tồn
- Ngày 01/09/2026: **Đang có** lấy tồn đầu kỳ trong cột D của Excel.
- Từ ngày sau: **Đang có** = **Tồn cuối ngày trước**.
- **Tồn cuối ngày** = Đang có + Nhập trong ngày − Tổng cây đóng/xuất.
- Tổng cây đóng/xuất = tổng số cây của tất cả nhân viên.
- Báo cáo từng loại cây giữ riêng từng loại, không cộng lẫn các kích thước.

Tương ứng Excel: `R = F+H+J+L+N+P`, `S = G+I+K+M+O+Q`, `T = D+E-R`.

## Phạm vi thời gian
Ứng dụng dùng ngày thực tế và cho phép theo dõi từ 01/09/2026 đến 31/12/2027, không phụ thuộc việc phải tạo sẵn 1 sheet Excel cho từng ngày.
