# V25.4.8 — ROOT FIX phân công cây mới

## Mục tiêu
Triệt để ngăn lỗi Firestore `Unsupported field value: a custom object` khi Admin phân công đơn có cây/kích thước vừa thêm.

## Thay đổi
- `catalogKey()` là hàm đồng bộ và luôn trả về chuỗi primitive.
- Không spread object UI vào payload Firestore.
- Mỗi assignment item được dựng lại thành object thuần gồm đúng 5 trường primitive: `plantIndex`, `plantKey`, `plantName`, `size`, `qty`.
- Payload đơn hàng cũng được dựng lại bằng các primitive rõ ràng trước khi gọi `DocumentReference.set()`.
- Có lớp kiểm tra cuối để chặn object/Promise/function/null/undefined lọt vào `items`.
- Giữ nguyên Firebase schema, dữ liệu cũ, logic tồn kho/tính công và giao diện.

## Version
- Android `versionCode`: 26
- Android `versionName`: `25.4.8`
