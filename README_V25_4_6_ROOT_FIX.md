# ROLL CÂY CẢNH V25.4.6 — ASSIGNMENT + 65x100 PRINT FIX

## 1. Lỗi phân công cây mới
Nguyên nhân gốc: `catalogKey()` được khai báo `async` nhưng được dùng như giá trị string. Khi thêm cây mới vào `assignmentItems`, trường `plantKey` trở thành Promise/custom object. Firestore `DocumentReference.set()` từ chối object này với lỗi `Unsupported field value: a custom object`.

Đã sửa `catalogKey()` thành hàm đồng bộ trả về string nguyên thủy. Luồng phân công cây cũ và cây mới đều dùng string `catalogId/plantKey`.

## 2. Phiếu đơn 65 x 100 mm
- Phiếu đơn chuyển từ bố cục A4 sang đúng khổ 65 x 100 mm.
- Chữ thông tin đơn được tăng kích thước, đậm hơn và bố cục gọn hơn.
- Android PrintAttributes dùng media size 65 x 100 mm cho job có tên `ROLL-CAY-CANH-*`.
- Báo giá vẫn giữ A4.
- Không lưu PDF trung gian trong luồng in.

## 3. Không đổi schema Production
`packingOrders` vẫn là nguồn chuẩn. Không migrate/reset dữ liệu.
