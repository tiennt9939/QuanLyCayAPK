# ROLL CÂY CẢNH V15 – Android ↔ iPhone Cloud Sync

V15 giữ nguyên giao diện/nghiệp vụ của V14 và bổ sung lớp đồng bộ Cloud dùng Firebase Authentication + Cloud Firestore.

## Chức năng V15
- Đăng ký/đăng nhập bằng email + mật khẩu.
- Một tài khoản dùng được trên Android và iPhone.
- Dữ liệu hiện tại vẫn lưu local khi offline.
- Khi có mạng, dữ liệu được đồng bộ vào Firestore.
- Có nút “Đồng bộ ngay” và trạng thái Cloud trên đầu ứng dụng.
- Dữ liệu được tách theo từng tài khoản Firebase.

## Thiết lập Firebase
1. Tạo project Firebase.
2. Tạo Web App và lấy Firebase config.
3. Bật Authentication → Sign-in method → Email/Password.
4. Tạo Firestore Database.
5. Mở `firebase-config.js` và thay 6 giá trị mẫu bằng config thật.
6. V17 đã chuyển sang dữ liệu dùng chung + hồ sơ phân quyền. Hãy dùng file `firestore.rules` trong project thay cho Rules V15 cũ.

### Firestore Rules

Xem file `firestore.rules` và tài liệu `README_V17_USERS_PERMISSIONS.md`.
