# ROLL CÂY CẢNH V20.3 – Tách Admin và nhân viên + chẩn đoán đồng bộ

- Tài khoản có quyền `admin` không còn được gắn với nhân viên.
- Nếu tài khoản Admin hiện tại từng bị gắn nhân viên, app sẽ tự bỏ liên kết đó khi Admin đăng nhập.
- Màn hình Tài khoản & phân quyền không còn nút Gắn NV/Đổi NV cho Admin.
- Nhân viên đóng hàng vẫn phải là user role `packer` và phải liên kết với một nhân viên có sẵn.
- Lỗi đồng bộ được tách rõ hơn: ghi dữ liệu chung `/apps/roll-cay-canh` hay ghi danh mục `/config/roll-cay-canh`.
- Firestore Rules trong file này phải được Publish lên Firebase Console; app không thể tự thay đổi Rules server.
