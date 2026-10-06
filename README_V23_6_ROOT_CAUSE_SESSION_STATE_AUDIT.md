# ROLL CÂY CẢNH V23.6 — ROOT CAUSE SESSION STATE AUDIT

Mục tiêu: xử lý gốc lỗi chuông báo “Phiên đăng nhập chưa sẵn sàng” dù giao diện đã đăng nhập và các chức năng Cloud khác vẫn hoạt động.

## Phân tích nguyên nhân
V23.5 vẫn dùng `authReady` như một cờ trạng thái mutable trong luồng UI. `onAuthStateChanged` là callback async; khi callback cũ/callback mới chạy xen kẽ, state cục bộ `user/profile/authReady` có thể lệch với `auth.currentUser`. Nút chuông lại kiểm tra cờ này và từ chối thao tác dù Firebase Auth thực tế đã có user.

## V23.6 sửa kiến trúc
1. `auth.currentUser` là nguồn xác thực hiện tại.
2. `sessionEpoch` loại bỏ callback Auth cũ sau khi session/user thay đổi.
3. `sessionUsable()` kiểm tra đồng thời currentUser, user nội bộ, profile, UID khớp và tài khoản active.
4. `ensureInteractiveSession()` tự khôi phục state từ `auth.currentUser` + `/users/{uid}` thay vì chỉ báo “chưa sẵn sàng”.
5. `waitUntilAuthReady()` tự repair session trong thời gian chờ, không chỉ polling một boolean.
6. `CloudSync.state().sessionReady` được tính từ state xác thực thực tế.
7. Chuông dùng `sessionReady`, không dùng cờ `ready` chung cho toàn bộ đồng bộ.
8. Đăng xuất tăng `sessionEpoch`, dừng listener và xóa state ngay để callback cũ không thể ghi ngược state.

## Dữ liệu đơn
`/packingOrders` tiếp tục là nguồn dữ liệu chuẩn cho phân công/chuông/hoàn thành. Không copy `packingOrders` vào `/apps/roll-cay-canh`.

## Không thay đổi
- Firestore Rules
- Firebase project
- UI nghiệp vụ hiện tại
- Cách Admin tạo đơn
- Cách packer hoàn thành đơn

## Kiểm tra tĩnh
- Tất cả inline JavaScript được kiểm tra bằng `node --check`: PASS.
- Đây chưa phải xác nhận APK runtime. Runtime phải được kiểm tra bằng APK build thực tế.
