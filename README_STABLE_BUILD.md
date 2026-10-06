# ROLL CÂY CẢNH V25.5.4 — STABLE ROOT BUILD

Đây là source Android chuẩn để đưa **trực tiếp vào thư mục gốc repository GitHub**.

## Quan trọng
- Không đặt toàn bộ thư mục `v2554_work` vào GitHub.
- Hãy đưa **các file/thư mục bên trong source này** vào root repository.
- Trong `.github/workflows/` chỉ giữ `build-apk.yml` của V25.5.4.
- Xóa workflow cũ có tên V25.4.4/V25.4.x để nó không chạy nhầm.

## Các điểm đã khóa
- Cây mới thêm vào danh mục được phép phân công.
- Cây không có kích thước được coi là hợp lệ và hiển thị `Không ghi kích thước`.
- Payload phân công Firestore chỉ chứa dữ liệu primitive, không Promise/object UI.
- Đơn phân công: quy cách 2–100 cây/combo.
- Nhân viên không tự nhập số cây; chỉ nhận đơn được giao.
- Hoàn thành đơn bắt buộc ít nhất 2 ảnh.
- Tiền công lấy theo dữ liệu đơn và đơn giá đã dùng.
- In phiếu đơn dùng khổ 65 × 100 mm; báo giá vẫn A4.
- Workflow build chỉ làm việc với Android project tại repository root, không tìm ZIP phiên bản cũ.
