# V23.9 — Ảnh bằng chứng + sửa chuông theo session Auth đã xác nhận

## Root cause đã xác định
- V23.8 đã lưu ảnh admin vào `D.daily[].proofImages[employee]`, nhưng màn hình Theo ngày không render ảnh đó, nên người dùng thấy bản ghi nhưng không thấy bằng chứng.
- Luồng chuông vẫn coi `firebase.auth().currentUser` tạm thời null trong WebView là lý do đủ để trả lỗi phiên, dù `onAuthStateChanged` đã xác nhận `CloudSync.user` và UI đang ở trạng thái đã kết nối.

## V23.9
- Khi admin ghi nhận: lưu `proofImages`, `proofTimes`, `proofCapturedBy` cùng bản ghi.
- Màn hình Theo ngày hiển thị thumbnail ảnh bằng chứng ngay dưới từng nhân viên; bấm ảnh để xem lớn.
- Chuông chỉ báo lỗi khi thực sự không còn session nội bộ; không chặn bởi một trạng thái `currentUser` tạm thời trong quá trình Firebase khôi phục persistence.
- Luồng nhân viên hoàn thành đơn vẫn bắt buộc ảnh và cập nhật `completionImage` trên `/packingOrders`.
- Không thay đổi Firestore Rules.
