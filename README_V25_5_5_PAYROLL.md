# V25.5.6 — Tính lương & quy cách đơn theo số cây thực tế

## Tính lương
- Thêm tab **Tính lương** chỉ hiển thị cho Admin.
- Chọn **Từ ngày / Đến ngày**, cho phép chọn cùng một ngày.
- Tổng hợp tất cả nhân viên trong khoảng thời gian.
- Gộp cả ghi nhận đóng hàng trực tiếp và đơn phân công đã hoàn thành.
- Tiền công = số cây thực tế × đơn giá kích thước +/− điều chỉnh.
- Có bảng chi tiết từng ngày và cột **Lũy kế** từ ngày bắt đầu.
- Xuất **CSV UTF-8 BOM** tương thích Excel với chi tiết từng ngày và tổng theo nhân viên.

## Quy cách combo
- Quy cách đơn **chính là số cây thực tế của mỗi đơn**, không phải một hệ số nhân thêm.
- Khách mua **1 cây** và chọn **1 cây** thì hệ thống ghi nhận đúng **1 cây**.
- Chọn 1 = 1 cây/đơn; chọn 2 = 2 cây/đơn; … chọn 100 = 100 cây/đơn. Không nhân thêm lần nữa.
- Với 2–100, số lượng tính tiền công và báo cáo chính là đúng số cây thực tế/đơn đã chọn.
