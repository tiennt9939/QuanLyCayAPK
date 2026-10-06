# ROLL CÂY CẢNH V17 – Tài khoản & phân quyền

Tài khoản quản trị viên gốc: `tiennt9939@gmail.com`.

## Quyền
- `admin`: toàn quyền + quản lý tài khoản.
- `manager`: đóng hàng + nhập kho + báo cáo.
- `packer`: đóng hàng.
- `warehouse`: nhập kho.
- `viewer`: chỉ xem báo cáo.

Tài khoản mới tự đăng ký được tạo mặc định là `viewer`. Quản trị viên có thể tạo user trực tiếp trong app và cấp quyền.

## Firestore
Dùng file `firestore.rules` trong thư mục project để cập nhật Rules trên Firebase Console.

Dữ liệu nghiệp vụ dùng chung nằm tại:
`apps/roll-cay-canh`

Hồ sơ quyền nằm tại:
`users/{uid}`

Dữ liệu V15/V16 cũ tại `users/{uid}/apps/roll-cay-canh` được quản trị viên tự động chuyển sang kho dùng chung lần đầu đăng nhập sau khi Rules mới được áp dụng.


## Firebase V17 – cấu hình và ghi nhớ đăng nhập
- Web App Firebase dùng project `roll-cay-canh` và đúng `apiKey` chính thức từ Firebase Console.
- `index.html` có thêm cấu hình dự phòng để WebView không bị báo “Chưa cấu hình Firebase” nếu file cấu hình không tải được.
- Firebase Auth được đặt `Persistence.LOCAL`, nên phiên đăng nhập được giữ trên thiết bị cho tới khi người dùng đăng xuất.
- Email có thể được ghi nhớ để tự điền lần sau; **mật khẩu không được lưu trong localStorage**.


## V17.10 – Login gate & quản trị user
- Khi mở app, hiển thị màn hình đăng nhập toàn màn hình; không có Đăng ký và Quên mật khẩu.
- Chỉ ghi nhớ email, không lưu mật khẩu.
- Firebase Auth dùng SESSION persistence để sau khi đóng/mở app sẽ yêu cầu đăng nhập lại.
- `tiennt9939@gmail.com` luôn là Bootstrap Admin.
- Tạo user dùng Firebase app phụ để không làm đăng xuất phiên Admin hiện tại.
- Firestore Rules cho phép Admin tạo hồ sơ cho UID mới; đây là phần bắt buộc để nút Tạo user hoạt động.
- Ảnh màn hình đăng nhập được đóng gói trong `app/src/main/assets/login-bg.jpg`.

### Bắt buộc sau khi cập nhật APK
Vào Firebase Console → Firestore Database → Rules → dán nội dung `firestore.rules` của gói này → **Publish**. Rules mới cho phép Bootstrap Admin tạo/đọc hồ sơ user. Firebase lưu ý Rules phải được triển khai để client Firestore được phép truy cập dữ liệu.


### V18 – Packer privacy / proof / 30s lock
`packer` không đọc document `/apps/roll-cay-canh`; chỉ đọc catalog/rates từ `/config/roll-cay-canh` và các entry trong `/packerRecords/{uid}/entries`. Ảnh bằng chứng được nén trong app và lưu cùng entry. Firestore Rules kiểm tra thời gian `createdAt` để chỉ cho phép người tạo sửa/xóa trong 30 giây; Admin được toàn quyền.
