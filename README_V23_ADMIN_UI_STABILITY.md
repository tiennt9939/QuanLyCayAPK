# V23 Admin UI Stability

- Giữ nguyên toàn bộ V22: login fix, nhập kho, tồn kho, phân công, tiền công +/- và packingOrders.
- Bổ sung lối tắt rõ ràng trong tab Điều khiển: Admin -> Mở giao diện Phân công đơn hàng -> Theo ngày -> Đóng hàng.
- Không thay đổi dữ liệu nghiệp vụ.
- Lỗi Missing or insufficient permissions là lỗi Firebase Rules/deployment riêng; giao diện Admin không được coi là mất chỉ vì trạng thái đồng bộ lỗi.
