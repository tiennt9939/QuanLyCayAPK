# V25.5.2 — Root fix cây mới / không kích thước + label 65x100

## Assignment
- Cho phép cây mới chưa khai báo kích thước được thêm vào đơn phân công.
- `size` rỗng là dữ liệu hợp lệ: Firestore Rules yêu cầu `size is string`, không yêu cầu non-empty.
- Không còn loại item hợp lệ chỉ vì `size === ''` trong `plainAssignmentItem`.
- Giữ catalogId/plantKey ổn định và payload Firestore primitive.

## Printing
- Giữ khổ 65x100mm cho phiếu đơn.
- Nới rộng logo, cỡ chữ và metadata; ép vùng in đúng 65mm, không max-width/centering gây co cụm.
- Giữ dòng hỗ trợ: 0353636420.
- Báo giá vẫn A4.
