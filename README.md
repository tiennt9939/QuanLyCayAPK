# ROLL CÂY CẢNH – APK v3

Bản v3 bám sát workbook `Tổng_hợp_sd1_đồng_bộ_danh_mục.xlsx`.

## Công thức
- Ngày 01/09/2026: cột D của Excel là **tồn đầu kỳ/đang có**, cột E là **nhập trong ngày**.
- Từ ngày tiếp theo: Đang có = Tồn cuối ngày trước.
- Bán/Xuất = tổng số cây đóng của 6 nhân viên.
- Tồn cuối = Đang có + Nhập trong ngày – Bán.
- Tiền công từng người = số cây người đó đóng × đơn giá theo kích thước từ bảng F:G của `Danh_Muc_Cay`.
- Chu kỳ trả lương: 7 ngày, bắt đầu 01/09/2026.
- Theo dõi đến 31/12/2027.

## Dữ liệu Excel đã nạp
- 99 dòng danh mục cây.
- 6 nhân viên.
- 6 đơn giá C6/C7/C9/C10/C11/C12.
- Dữ liệu thực có trong workbook được nạp; ngày 01/09/2026 có tồn đầu 500 cây ở dòng cây đầu tiên và 80/50/70 cây đóng bởi Luân lớn/Luân nhỏ/Huy.

Logo ROLL CÂY CẢNH được dùng trong giao diện và biểu tượng APK.


## v4.0.0 – công thức bám sát Excel
- Tiền công từng nhân viên = tổng (số cây người đó đóng theo từng cây × đơn giá theo kích thước).
- Tiền công ngày = cộng tiền công của toàn bộ cây trong ngày.
- Báo cáo nhân viên = cộng tiền công của từng ngày trong khoảng chọn.
- Chu kỳ lương = cộng tiền công từng ngày theo các kỳ 7 ngày, giống Tong_Quan của Excel.
- Tồn từng cây: đầu kỳ + nhập trong kỳ − tổng số cây đóng; sang ngày kế tiếp, tồn đầu ngày chính là tồn cuối ngày trước.
- Bảng báo cáo hiển thị riêng số cây và tiền công của từng nhân viên theo từng loại cây.


### V17.10 – Login/Admin fix
Màn hình đăng nhập xuất hiện trước khi vào app; không có đăng ký/quên mật khẩu. Admin `tiennt9939@gmail.com` có toàn quyền. Tạo user bằng Firebase app phụ và Firestore Rules mới.


## V18 – Nhân viên đóng hàng + ảnh bằng chứng + khóa 30 giây
- Tài khoản `packer` chỉ thấy Đóng hàng và Báo cáo của chính mình; không vào Kho/Theo dõi cây/Điều khiển.
- Nhân viên không chọn được tên người khác; hệ thống lấy tên từ tài khoản Firebase.
- Mỗi lần ghi nhận đóng hàng bắt buộc chụp ảnh trực tiếp bằng camera. Không có ảnh thì nút ghi nhận bị khóa.
- Bản ghi được lưu riêng theo UID tại `packerRecords/{uid}/entries/{entryId}`.
- Nhân viên được sửa/xóa trong 30 giây đầu; sau 30 giây Firestore Rules khóa bản ghi. Admin có toàn quyền sửa/xóa.
- Báo cáo của nhân viên chỉ lấy các bản ghi của UID đó.
- Admin có khu vực xem và xử lý các bản ghi đóng hàng có ảnh.
- Firestore Rules mới trong `firestore.rules` phải được Publish lên Firebase Console trước khi thử bản APK này.
- Admin nên mở ứng dụng và đồng bộ ít nhất một lần để đẩy catalog + đơn giá vào `config/roll-cay-canh`, để tài khoản packer có dữ liệu chọn cây.


## V19 – Phân công đơn đóng hàng + quy cách combo
- Admin phân công trực tiếp loại cây + kích thước + nhân viên đóng hàng.
- Admin chọn quy cách combo từ **2 đến 100 cây/combo** và số đơn cần đóng. Không cho quy cách 1 cây.
- Mỗi đơn được tạo riêng trong `packingOrders`, gắn với đúng UID nhân viên.
- Nhân viên `packer` không còn quyền nhập số cây và không chọn nhân viên khác.
- Nhân viên chỉ nhìn thấy các đơn được phân công cho chính mình, có thông báo trong app khi có đơn chờ.
- Khi đóng xong, nhân viên bắt buộc chụp ảnh trực tiếp bằng camera và xác nhận hoàn thành đơn.
- Chỉ đơn đã hoàn thành và có ảnh mới được tính tiền công; tiền công = quy cách combo × đơn giá theo kích thước.
- Admin xem được toàn bộ đơn, ảnh hoàn thành và có quyền xử lý/xóa.
- Firestore Rules mới giới hạn nhân viên chỉ đọc đơn của mình và chỉ được chuyển đơn từ `pending` sang `completed` khi có ảnh.
- **Phải Publish `firestore.rules` mới trên Firebase Console trước khi thử V19.**



## V20.1 – Thông báo đơn hàng + thống kê Admin
- 🔔 Thêm chuông thông báo trên đầu app; số đơn **chưa hoàn tất** hiển thị bằng badge đỏ.
- 🔊 Khi phát hiện số đơn chờ tăng, app hiển thị cảnh báo trực quan, phát âm thanh cảnh báo và rung điện thoại (nếu WebView cho phép).
- 👷 Nhân viên đóng hàng chỉ nhận thông báo các đơn được phân công cho chính mình.
- 📊 Admin có thẻ thống kê **Chưa hoàn tất** và **Đã hoàn tất · ghi nhận**, cập nhật tự động từ Firestore.
- 🔄 Trạng thái đơn được theo dõi realtime khi app đang mở.
- 🔒 Không thay đổi quyền: nhân viên đóng hàng vẫn không được tự nhập số cây; chỉ hoàn thành đơn sau khi chụp ảnh.

## V20 – Nhân viên ↔ tài khoản + phân công đơn hoàn chỉnh
- **Nhân viên** và **User Firebase** là hai khái niệm riêng. Tài khoản đăng nhập được cấp cho một nhân viên đã có sẵn; không tạo nhân viên trùng.
- Admin có thể **Gắn NV/Đổi NV** cho tài khoản Firebase hiện có. Mỗi nhân viên hoạt động chỉ được liên kết với một tài khoản.
- Chỉ tài khoản `packer` đã được liên kết với nhân viên mới xuất hiện trong danh sách **Phân công đơn đóng hàng**.
- Admin phân công: nhân viên → loại cây → kích thước → quy cách **2–100 cây/combo** → số đơn → ghi chú.
- Nhân viên chỉ thấy đơn được giao cho UID của mình, không thấy kho, tồn kho hoặc dữ liệu nhân viên khác.
- Nhân viên **không nhập số cây**. Khi đóng xong phải chụp ảnh trực tiếp bằng camera; chưa có ảnh thì nút hoàn thành bị khóa. Chỉ đơn `completed` có ảnh mới được tính tiền công theo `combo × đơn giá kích thước`.
- Báo cáo của nhân viên chỉ lấy các đơn đã hoàn thành của chính tài khoản đó.
- Admin xem toàn bộ đơn, ảnh hoàn thành và có quyền xóa/xử lý.
- V20 bỏ quyền ghi `packerRecords` trực tiếp; tiền công được lấy từ `packingOrders` để tránh nhân viên tự tạo số lượng.
- Trạng thái đồng bộ hiện hiển thị lỗi Firebase cụ thể thay vì chỉ báo chung “kiểm tra quyền”.

### Việc bắt buộc trên Firebase Console
Sau khi đưa V20 lên GitHub, vào **Firestore Database → Rules**, thay toàn bộ Rules hiện tại bằng file `firestore.rules` của V20 và bấm **Publish**. Nếu không Publish Rules mới, việc liên kết tài khoản, phân công đơn và hoàn thành đơn có thể bị từ chối.

### Sau khi build APK V20
1. Đăng nhập Admin `tiennt9939@gmail.com`.
2. Vào **Điều khiển → Tài khoản & phân quyền**.
3. Với tài khoản `huylonghan@gmail.com` hiện có, bấm **Gắn NV** và chọn nhân viên HUY. Không tạo thêm HUY.
4. Nếu tạo tài khoản mới, bấm **Cấp tài khoản**, chọn nhân viên đã có sẵn rồi nhập email/mật khẩu.
5. Sau khi tài khoản packer đã liên kết, mục **Phân công đơn đóng hàng** sẽ hiển thị người đó.
6. Chọn combo 2–100 và phân công.
7. Đăng nhập bằng tài khoản nhân viên để kiểm tra: chỉ thấy đơn của mình → chụp ảnh → hoàn thành → tiền công mới phát sinh.


## V20.2 – FIX ĐỒNG BỘ + PHÂN CÔNG
- Tách catalog thành các document `config/roll-cay-canh/plants/{index}` để tránh lỗi giới hạn kích thước Firestore khi catalog có ảnh.
- Không còn đẩy `packerRecords`/`packingOrders` vào document tổng `apps/roll-cay-canh`; đơn đóng hàng và ảnh hoàn thành nằm ở collection `packingOrders`.
- Hiển thị lỗi Cloud cụ thể khi đồng bộ thất bại.
- Firestore Rules có quyền cho subcollection `config/{configId}/plants/{plantId}`.
- Admin vẫn phân công combo 2–100 cây; nhân viên chỉ nhận đơn, chụp ảnh hoàn thành rồi mới được ghi nhận tiền công.
- Bắt buộc Publish lại `firestore.rules` V20.2 trước khi dùng bản APK mới.


## V20.5 – Fix màn hình đăng nhập
Đã bổ sung đầy đủ `showLoginGate`, `hideLoginGate`, `gateLogin`, nhớ email và xử lý Enter. Lỗi V20.4 là nút ĐĂNG NHẬP gọi `gateLogin()` nhưng hàm không còn trong source.


## V20.9
Sửa phân công đơn đóng hàng: dùng `/packingOrders`, nút XEM ĐƠN NGAY mở danh sách đơn, và Admin điều chỉnh tiền công trực tiếp trên từng đơn.
