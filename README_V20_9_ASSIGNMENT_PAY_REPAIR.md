# ROLL CÂY CẢNH V20.9 — Assignment + Order Pay Repair

- Admin giữ nguyên luồng Đóng hàng/ Nhập kho cũ.
- Admin có thêm Quy cách combo tùy chọn ở phần đóng hàng thủ công.
- Mỗi đơn phân công hiển thị tiền công gốc, điều chỉnh và tổng tiền công.
- Admin có nút `± Tiền công` ngay trên từng đơn để cộng/trừ tiền công và ghi chú.
- Đơn phân công dùng collection `/packingOrders`, đúng với Firestore Rules dành cho packer.
- Nhân viên đóng hàng nhận đơn bằng query theo `assignedUid`; nút `XEM ĐƠN NGAY` mở thẳng danh sách đơn.
- Khi hoàn thành, lưu `completedAt` bằng server timestamp để khớp Firestore Rules.
- Admin tự động chuyển đơn cũ trong `/apps/roll-cay-canh` sang `/packingOrders` một lần nếu collection mới đang trống.
- V20.8 data repair vẫn được giữ nguyên: catalog 99 dòng, đơn giá, nhập kho, tồn kho và điều chỉnh tiền công theo ngày.
