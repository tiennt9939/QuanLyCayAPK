# BÀN GIAO DỰ ÁN ROLL CÂY CẢNH — 24/10/2026
## Mục tiêu tiếp theo: xử lý đầy bộ nhớ cục bộ + lỗi đồng bộ Firestore an toàn

> Tài liệu này là handover để tiếp tục trong cuộc trò chuyện mới. Người dùng đã xác nhận **xuất được file JSON thành công**. Không yêu cầu người dùng xuất lại JSON hoặc gửi lại các thông tin đã có, trừ khi phát sinh bằng chứng mới cho thấy file sao lưu không hợp lệ.

## 1. Thông tin dự án

- Ứng dụng: **ROLL CÂY CẢNH / QuanLyCayAPK**.
- Repository: `tiennt9939/QuanLyCayAPK`, nhánh `main`.
- Android package: `com.quanlycay.apk`.
- Stack: Android WebView + HTML/CSS/JavaScript + Java; Firebase Authentication + Firestore; Google Drive dùng lưu ảnh.
- Source UI/logic chính: `app/src/main/assets/index.html`.
- Java bridge: `app/src/main/java/com/quanlycay/apk/MainActivity.java`.
- Workflow build: `.github/workflows/build-apk.yml`.
- Người dùng làm việc chủ yếu bằng điện thoại Android/SPCK Editor, cần gói ZIP source đầy đủ, tránh yêu cầu sửa từng đoạn code thủ công.

## 2. Trạng thái phiên bản — phải phân biệt rõ source với APK đang cài

- **APK được thấy trong ảnh gần nhất:** V26.2.100, `versionCode=152`.
- **Source ZIP mới nhất đã tạo trong lượt trước:** `ROLL-CAY-CANH-V26.2.101-JSON-EXPORT-FIX-AUTO-UPDATE-SOURCE.zip`, `versionName=26.2.101`, `versionCode=153`.
- SHA-256 của ZIP V26.2.101 đã xác minh: `2e37e3e55fc55784309a7ba67d15cf40d81d527c0400d5412f98b3b2826177f4`.
- Source V26.2.101 đã được giải nén từ chính ZIP đầu ra và kiểm tra: `tools/preflight.py` PASS; 92/92 bài test JavaScript PASS; `unzip -t` PASS. **Chưa build APK bằng Gradle/GitHub Actions và chưa kiểm thử Firebase/thiết bị thật.** Không tuyên bố APK V26.2.101 đã tồn tại hoặc đã cài.
- V26.2.101 bổ sung `@JavascriptInterface` cho `AndroidBridge.saveFile` và giữ hỗ trợ phần mở rộng `.json`; người dùng sau đó xác nhận đã xuất được JSON. Không quay lại yêu cầu họ sửa/troubleshoot xuất JSON, trừ khi họ báo lỗi mới.
- Source ZIP V26.2.101 ở đường dẫn lượt trước: `/mnt/data/ROLL-CAY-CANH-V26.2.101-JSON-EXPORT-FIX-AUTO-UPDATE-SOURCE.zip`.

## 3. Đã biết về lỗi GitHub Actions và quy tắc tên source

Có hai lỗi build khác nhau đã gặp:

1. **Lỗi kiểm thử version metadata ở V26.2.100:** bài test cũ còn khóa kỳ vọng V26.2.99/code 151. Source sửa lại đã cập nhật các điều kiện phiên bản; source kiểm tra hiện tại cho 92/92 bài test đạt.
2. **Lỗi chọn source:** workflow báo `Không tìm thấy *AUTO-UPDATE-SOURCE.zip trên repository.` khi trong repository không có ZIP phù hợp tên. Gói `SOURCE_REPACKED.zip` không khớp quy tắc chọn source. Workflow quét repository tìm tên kết thúc đúng bằng `AUTO-UPDATE-SOURCE.zip`.

Khi cần build V26.2.101:
- Tải/đưa đúng file `ROLL-CAY-CANH-V26.2.101-JSON-EXPORT-FIX-AUTO-UPDATE-SOURCE.zip` vào repository và commit lên `main`.
- Đảm bảo workflow có thể nhìn thấy file ZIP này; nếu trong repo có nhiều ZIP cùng hậu tố, kiểm tra workflow đã chọn đúng version.
- Chạy GitHub Actions và đọc log thực tế. Chỉ gọi build thành công khi thấy Gradle build, xác minh APK/chữ ký và upload Artifact thành công.

## 4. Xác nhận quan trọng nhất từ người dùng

- Người dùng **đã xuất được JSON thành công**. Tiếp tục từ trạng thái này.
- Không đổ lỗi cho thao tác người dùng khi chưa audit code; không yêu cầu gửi lại source hay xuất JSON lại một cách vô ích.
- Ảnh trước đó cho thấy thư mục `Download/ROLL CAY CANH` có các JSON khoảng 1,5 MB, nhưng ảnh đó có timestamp cũ 16/10. Người dùng sau đó đã xác nhận xuất được JSON; nếu cần kiểm tra độ an toàn thì chỉ nhắc họ giữ file mới nhất (timestamp hiện hành), xác nhận dung lượng >0 và sao chép thêm ra một nơi khác. Không yêu cầu import lại JSON.

## 5. Hiện tượng đầy bộ nhớ — bằng chứng trên giao diện

Thông báo từng xuất hiện:

`Bộ nhớ cục bộ vẫn đầy dù ảnh đã chuyển sang Drive. Hãy đồng bộ Cloud trước khi thoát ứng dụng.`

Một lỗi đồng bộ khác xuất hiện ở thanh trạng thái và toast:

`Lỗi đồng bộ · Không ghi được dữ liệu chung /apps/roll-cay-canh: FIRESTORE (10.14.1) INTERNAL ASSERTION FAILED: Unexpected state`

Máy Admin đang đăng nhập `tiennt9939@gmail.com`; Google Drive được báo là đã kết nối. Trước đó có sự cố hai máy dùng cùng tài khoản Admin không nhận cùng danh sách PDF/quy tắc đối chiếu.

Không gộp hai lỗi làm một:
- Lỗi local storage/quota làm cho bản cache không ghi được.
- Lỗi Firestore khiến chưa thể khẳng định dữ liệu đã ghi lên Cloud thành công.

## 6. Audit code đã thấy — điểm quan trọng để sửa đầy bộ nhớ

Trong V26.2.100/V26.2.101, `app/src/main/assets/index.html` có luồng liên quan:

1. `localSaveOnly()`:
   - Gọi `DriveStorage.toLocalCacheValue(D)` để chuyển ảnh trong snapshot sang tham chiếu Drive.
   - Chỉ loại khỏi cache `packingOrders` có trạng thái completed cũ hơn 30 ngày.
   - Sau đó serialize gần như toàn bộ `D` thành JSON và lưu vào `localStorage` key `quanlycay`.
   - Khi `localStorage.setItem('quanlycay', full)` gặp quota exceeded, giữ cache cũ, đặt cờ `quanlycay_dirty` nếu được và hiện thông báo đầy bộ nhớ.

2. `dailyShipmentPersistLocalBackup()`:
   - Ghi một bản sao bổ sung chứa `D.dailyShipmentOrders` và `D.dailyShipmentReports` vào key `roll_cay_daily_shipment_state_backup_v1`.
   - Bản sao này trùng lặp một phần dữ liệu đã có trong object `D`; có chặn khi chuỗi vượt 3.500.000 ký tự, nhưng chưa có cơ chế tổng dung lượng toàn bộ localStorage.

3. Các key lưu cục bộ khác gồm:
   - `ROLL_CAY_PACKER_ORDERS_<uid>`: cache danh sách đơn được giao theo UID; migration cũ cố chuyển ảnh nhúng sang tham chiếu Drive.
   - `roll_cay_daily_shipment_pending_v1`: hàng ảnh chụp đang chờ tải/ghi, tối đa 300 dòng; cần giữ để cứu ảnh chưa hoàn tất.
   - Các key về hàng chờ TikTok/quy tắc nhận diện, bản đồ ID ảnh Drive và trạng thái đồng bộ.

4. `migrateLocalImagesToDrive()`:
   - Tạo snapshot từ `D`, chuyển ảnh Base64 qua `DriveStorage.toCloudValue()` và xác nhận không còn image data trong kết quả.
   - Rà cả các cache `ROLL_CAY_PACKER_ORDERS_*`.
   - Gọi lại `localSaveOnly()`. Dù ảnh đã thành tham chiếu Drive, toàn bộ JSON nghiệp vụ và các key cache trùng nhau vẫn có thể khiến tổng localStorage vượt quota.

### Kết luận tạm thời, không được nói quá mức

Đã xác nhận code có đường ghi `localStorage` lớn và có key sao lưu vận chuyển riêng làm trùng dữ liệu; điều này là một hướng nguyên nhân mạnh đối với quota. Cần đo kích thước từng key và chạy test tái hiện trước khi kết luận chính xác tỷ lệ dung lượng của từng key trên điện thoại thật. Cũng chưa xác định nguyên nhân gốc của `FIRESTORE INTERNAL ASSERTION FAILED` chỉ từ ảnh.

## 7. Kế hoạch xử lý tiếp theo — thứ tự bắt buộc

### Bước A — Bảo vệ bản sao lưu

- Vì người dùng đã xuất JSON, yêu cầu họ **giữ nguyên file mới nhất**, không xóa file đó.
- Đề nghị sao chép file JSON mới nhất ra thêm một vị trí độc lập (ví dụ Google Drive/PC/thư mục khác). Không lưu bản duy nhất trong cùng vùng dữ liệu ứng dụng.
- Chỉ xác nhận backup hợp lệ khi: file mới nhất có timestamp hiện hành, dung lượng khác 0, mở/parse JSON được và cấu trúc có dữ liệu chính (`catalog`, `daily`, các mảng/đối tượng nghiệp vụ cần có). Không import file vào app khi chưa có chỉ dẫn phục hồi.

### Bước B — Không làm các thao tác nguy hiểm trên điện thoại

Cho đến khi Cloud sync được xác minh:
- Không gỡ app.
- Không chọn Android Settings → Apps → ROLL CÂY CẢNH → Clear data/Clear storage.
- Không xóa thủ công localStorage hoặc các key `quanlycay*`, `roll_cay_daily_shipment_*`, `ROLL_CAY_PACKER_ORDERS_*`.
- Không xóa đơn/lịch sử/ngày nghiệp vụ, không reset ngày để né lỗi.
- Không import lại PDF hoặc quét hàng loạt trong lúc app báo lỗi đồng bộ.
- Không bấm Đồng bộ ngay liên tục khi vẫn hiện lỗi Firestore.

### Bước C — Audit và sửa đồng bộ Firestore trước khi xóa cache

- Tìm trong source phiên bản thực tế đang triển khai đường `CloudSync.pushNow()`, `schedulePush`, listener/onSnapshot và mọi chỗ ghi tài liệu `/apps/roll-cay-canh`.
- Kiểm tra khả năng nhiều lần push chạy chồng nhau, listener phản hồi lại bằng push, transaction/batch hoặc đối tượng Firestore được tái sử dụng sai trạng thái. Đây là các giả thuyết để audit, chưa phải kết luận.
- Bổ sung khóa/serialize cho push nếu code chứng minh có ghi chồng; tránh vòng lặp listener → local save → push; đảm bảo lỗi trả về không đánh dấu dữ liệu sạch.
- Có logging rõ ràng theo giai đoạn đọc/normalize/write, không log dữ liệu nhạy cảm hoặc toàn bộ JSON/ảnh.
- Kiểm thử trường hợp Cloud write fail, retry, hai Admin cùng cập nhật, hàng chờ PDF khác nhau, đơn đã ghi không bị hồi sinh/đổi trạng thái.
- Không mở rộng Firestore Rules và không thay schema khi chưa có bằng chứng cần thiết.

### Bước D — Giải quyết localStorage quota có kiểm soát

- Tạo chẩn đoán nội bộ chỉ hiển thị tên key, số byte/char và số ảnh nhúng (không hiển thị nội dung) để biết key nào gây đầy.
- Không xóa bản sao queue/history trong lúc sync đang lỗi.
- Sau khi có thể xác nhận Cloud đã ghi đủ, giảm trùng lặp: đánh giá `roll_cay_daily_shipment_state_backup_v1` so với `D.dailyShipmentOrders/reports`; chuyển cache lớn sang IndexedDB hoặc thiết kế cache vận hành gọn hơn, trong khi Firestore giữ lịch sử chuẩn.
- Giữ đầy đủ đơn đang mở, chưa phân công, đã phân công, chưa ghi, đang chờ ảnh/retry và mọi record chưa được xác nhận Cloud. Không dọn mù theo ngày nếu nó có thể ảnh hưởng phân công/tiền công/tồn kho.
- `packingOrders` retention hiện chỉ loại khỏi cache đơn completed cũ hơn 30 ngày; các dữ liệu báo cáo/tiền công/tồn kho cần giữ đúng quy tắc nghiệp vụ. Không xóa history Cloud.
- Khi quota exceeded, không chỉ hiện toast; dùng chiến lược fallback an toàn và báo rõ nếu cache chưa lưu được. Không tuyên bố đồng bộ thành công khi Firestore fail.

### Bước E — Kiểm thử và bàn giao

- Test localSaveOnly khi dữ liệu lớn; test ảnh toàn bộ là `drive://`; test cache queue trùng; test pending photo; test đầy quota; test Cloud fail rồi retry; test lịch sử payroll/inventory sau reload.
- Chạy toàn bộ `python3 tools/preflight.py`, `node --test tools/*_test.js`, các kiểm tra cú pháp JavaScript/XML và `unzip -t` trên chính ZIP đầu ra.
- Build GitHub Actions thực tế sau khi ZIP đúng tên đã commit vào `main`; ghi run URL/kết quả nếu có.
- Phân biệt rõ: test source, build APK, cài/kiểm tra trên điện thoại và sync Firestore thật là bốn mức xác minh khác nhau.
- Chỉ giao ZIP source đầy đủ có hậu tố `AUTO-UPDATE-SOURCE.zip`, SHA-256, audit report, validation summary, changed files. Không gửi các file patch rời nếu có thể giao ZIP hoàn chỉnh.

## 8. Nghiệp vụ đã tốt — phải giữ nguyên

- Không dựng lại dự án từ đầu. Giữ cấu trúc, nghiệp vụ và dữ liệu của source hiện tại.
- Không thay đổi cấu trúc Firestore/schema, danh mục cây, giá bán/giá nhập, tiền công, tồn kho, lịch sử hoặc trạng thái đơn chỉ để làm hết cảnh báo.
- Admin quét mã vận đơn thật và hoàn tất đơn thay nhân viên đã hoạt động tốt. Không giả định Admin quét sai hoặc hai tài khoản đang dùng APK khác nhau nếu không có bằng chứng mới.
- Không thay luồng quét mã/ghi nhận đơn, không giảm kiểm tra chống trùng, không bỏ cảnh báo sản phẩm chưa đối chiếu.
- PDF recognition chỉ ghép từ Product Name/đặc trưng đã xác nhận, không suy đoán cây từ mã vận đơn. Cần giữ nguyên các quy tắc đã xây dựng:
  - Mặc định size C7 khi không nêu size theo các quy tắc hiện hành.
  - Nguyệt quế Thái: nếu SKU ghi C9 thì C9, nếu không thì mặc định C7; chiều cao 15–20 cm → C7, 20–30 cm → C9 theo rule đã chốt.
  - Combo 5 là 5 cây; combo 4 tặng 1 tổng 5 cây; nhân với Qty đơn.
  - “Rubi 4 cây (tặng 1)” = 5 cây mỗi combo; Qty 2 = 10 cây.
  - Cẩm tú mai: tiền công C9 2.000đ/cây, C7 1.600đ/cây; Táo Thái C9 5.000đ/cây; Kim tiền C9 4.000đ/cây.
- Giữ luồng phân công đơn cho nhân viên, Admin quét thay và ghi công đúng nhân viên được giao; không cho nhầm chủ đơn ghi nhận.
- Giữ bộ đếm báo cáo theo tên cây + kích thước + SKU của V26.2.96/97: bấm bộ đếm rồi mới xổ đơn, SKU khác nhau không gộp; không dựng tất cả chi tiết cùng lúc gây lag.
- Báo cáo chọn Từ ngày/Đến ngày và tổng tiền công (V26.2.94) cần giữ.
- Báo cáo chi tiết đơn/SKU (V26.2.95) cần giữ.
- Không xóa lịch sử, dữ liệu nhân viên, danh mục, đơn hàng hoặc ảnh để xử lý quota.

## 9. Các vấn đề chưa giải quyết / chưa xác minh

1. **Đầy localStorage dù ảnh đã chuyển Drive** — cảnh báo đã thấy; code cho thấy main dataset và cache vận chuyển có thể trùng dữ liệu lớn. Cần đo key thực tế và sửa an toàn.
2. **Firestore `INTERNAL ASSERTION FAILED: Unexpected state`** ở `/apps/roll-cay-canh` — chưa xác định root cause; cần audit push/listener/concurrency trên source và thử Firebase thật.
3. Hai điện thoại cùng Admin cần cùng nhìn thấy PDF queue và mapping; source v26.2.98/99/100 đã thêm cơ chế liên quan nhưng chưa có xác nhận live Firebase hai máy hoạt động đúng.
4. Source V26.2.101 chưa build APK thực tế theo log có sẵn; CI từng fail vì test phiên bản cũ và/hoặc ZIP không đúng tên.
5. Sau khi sửa, cần kiểm thử điện thoại thật, tốc độ quét, ảnh Drive, báo cáo/tiền công và hành vi offline.

## 10. Cách làm việc với người dùng

- Người dùng muốn trả lời thực tế, ngắn gọn, không dài dòng lặp lại; tuy nhiên audit phải đủ căn cứ.
- Không hỏi lại thông tin đã có ở handover này.
- Không đề nghị người dùng gửi lại ZIP đã có trong thư viện/cuộc trò chuyện; tự tìm file hiện có trước.
- Người dùng đã xuất JSON thành công — ghi nhận điều này và bắt đầu từ bảo vệ/kiểm tra file sao lưu, rồi tập trung vào localStorage + Firestore.
- Không tuyên bố “đã sửa xong” dựa trên cú pháp/test giả lập. Nói rõ đã test source, đã build hay đã xác minh trên máy thật.

## 11. Yêu cầu mở đầu cho cuộc trò chuyện mới (copy nguyên đoạn này nếu cần)

Tiếp tục dự án ROLL CÂY CẢNH theo handover này. Người dùng đã xuất JSON thành công. Ưu tiên số 1 là xử lý đầy localStorage và lỗi Firestore `INTERNAL ASSERTION FAILED: Unexpected state` mà không mất dữ liệu. Hãy kiểm tra source ZIP V26.2.101 có sẵn hoặc tìm trong file đính kèm/thư viện trước, không yêu cầu người dùng gửi lại. Không xóa cache/đơn/lịch sử thủ công, không import PDF lại, không thay nghiệp vụ hoặc schema. Audit `localSaveOnly()`, `dailyShipmentPersistLocalBackup()`, `migrateLocalImagesToDrive()`, các key `quanlycay`, `roll_cay_daily_shipment_state_backup_v1`, `ROLL_CAY_PACKER_ORDERS_*`, và CloudSync push/listeners. Xác minh JSON backup trước, chẩn đoán kích thước từng key, sửa đồng bộ Firestore trước khi dọn cache, sau đó test hồi quy/đóng ZIP đúng hậu tố `AUTO-UPDATE-SOURCE.zip`. Phân biệt kết quả source test, GitHub Actions build và kiểm tra Firebase/điện thoại thật.
