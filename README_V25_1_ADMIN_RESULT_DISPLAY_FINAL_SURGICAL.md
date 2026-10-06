# V25.1 – ADMIN RESULT DISPLAY FINAL SURGICAL FIX

Bản này giữ nguyên source V25.1 ADMIN RESULT BRIDGE FIX và chỉ sửa đúng phần Admin hiển thị kết quả đơn phân công đã hoàn tất.

## Chỉ sửa 3 điểm
1. **Theo ngày:** đơn nhân viên hoàn tất được cộng vào `Đóng hàng`, `Đơn hoàn tất` và `Tiền công`.
2. **Theo dõi cây / tồn kho:** số cây hoàn tất từ đơn phân công được tính vào `Đóng` theo đúng cây + kích thước; tồn cuối tiếp tục trừ đúng số cây đã hoàn tất.
3. **Báo cáo:** đơn hoàn tất được cộng vào tổng đóng hàng, tổng tiền công, tiền công theo nhân viên và sản lượng theo cây/kích thước.

## Không thay đổi
- Không thay đổi giao diện nhân viên đóng hàng.
- Không thay đổi quy trình Admin giao đơn → nhân viên nhận → chụp ảnh → xác nhận hoàn thành.
- Không thay đổi Firebase Rules.
- Không thay đổi danh mục cây, đơn giá, nhập kho, tài khoản, đăng nhập, phân quyền hay giao diện khác.
- Không chép đơn phân công vào `D.daily`, tránh cộng sản lượng hai lần.

## Kiểm tra
- Đã kiểm tra cú pháp toàn bộ 5 khối JavaScript trong `index.html`: PASS.
- Chưa có APK runtime được build/test trên thiết bị trong môi trường này.
