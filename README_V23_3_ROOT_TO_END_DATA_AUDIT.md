# ROLL CAY CANH V23.3 — ROOT-TO-END DATA CONSISTENCY AUDIT

## Mục tiêu
V23.3 chốt lại kiến trúc dữ liệu của luồng phân công/đóng hàng để Android và iOS có thể dùng chung Firebase/Firestore mà không phụ thuộc cache của giao diện.

## Nguồn dữ liệu chuẩn
- `/apps/roll-cay-canh`: cấu hình/nghiệp vụ chung: catalog, rates, employees, daily, opening.
- `/packingOrders`: **nguồn duy nhất** cho đơn phân công/đóng hàng.
- `/users/{uid}`: tài khoản + vai trò + liên kết nhân viên.
- `/config/{configId}`: không dùng làm nguồn chính cho luồng đơn.

`packingOrders` không còn được copy qua `/apps/roll-cay-canh.data`. Điều này tránh tình trạng Admin ghi một bản cũ của đơn vào document chung rồi tài khoản nhân viên đọc một bản khác.

## Luồng nhân viên
1. Firebase Auth khôi phục phiên.
2. Hồ sơ `/users/{uid}` được đọc và kiểm tra active/role.
3. Chỉ sau khi `CloudSync.ready === true` app mới cho phép thao tác chuông.
4. Query/listener dùng `packingOrders.where('assignedUid','==',auth.uid)`.
5. Listener là nguồn realtime; local cache chỉ là phương án khôi phục giao diện khi WebView reload.
6. Bấm chuông không gọi luồng nhập thủ công của Admin và không gọi `go('day','pack')`.
7. Mở đơn chỉ giữ `D.packingOrders` và mở panel nhân viên.
8. Hoàn thành đơn cập nhật trực tiếp document `/packingOrders/{orderId}`.

## Bảo vệ dữ liệu
- Không biến lỗi mạng/quyền thành 0 đơn.
- Không để `/apps` ghi đè danh sách `/packingOrders`.
- Không dùng local cache để làm nguồn xác nhận cuối cùng.
- Cache của nhân viên được khóa theo Firebase UID.
- Đơn của nhân viên luôn lọc thêm `assignedUid === auth.uid` ở client.

## Tồn kho / báo cáo
Đơn hoàn thành vẫn nằm trong `packingOrders/packerRecords`, không copy vào `D.daily`. Công thức tồn kho và báo cáo cộng phần `packerRecords` đúng một lần.

## Kiểm tra source
- Tất cả inline JavaScript được kiểm tra bằng `node --check`.
- Không có duplicate `readPackProofImage` / `resetPackProof`.
- Android build vẫn do GitHub Actions thực hiện; môi trường đóng gói này không giả nhận đã build APK.

## Test bắt buộc trước khi đưa vào hoạt động
### Admin
- Đăng nhập → phân công 8 đơn cho đúng tài khoản nhân viên.
- Admin thấy 8 đơn pending.
- Refresh app → 8 đơn vẫn còn.

### Nhân viên
- Đăng nhập → thấy badge 8.
- Bấm chuông → thấy đúng 8 đơn.
- Bấm XEM ĐƠN NGAY → vào panel Đóng hàng, không reload/văng.
- Chọn 1 đơn → chụp ảnh → hoàn thành.
- Refresh app → 7 đơn pending, 1 completed.

### Đồng bộ
- Admin refresh → thấy 1 đơn completed và ảnh.
- Nhân viên refresh → trạng thái completed giữ nguyên.
- Không có đơn nào tự biến mất vì một lần đọc Cloud rỗng.
