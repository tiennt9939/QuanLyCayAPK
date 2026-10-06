# V25.5.1 — ROOT FIX: CÂY MỚI KHÔNG PHÂN CÔNG

## Nguyên nhân
1. Màn hình phân công có thể gọi refresh catalog sau khi cây mới vừa lưu local. Nếu push Cloud thất bại hoặc Cloud còn bản cũ, code cũ lấy catalog Cloud và ghi đè catalog local, làm mất/đổi ngữ cảnh cây mới.
2. Bước tạo đơn phụ thuộc cứng vào `plantIndex`, trong khi catalog có thể thay đổi thứ tự.
3. `createPackingOrder()` loại bỏ item có `size` rỗng dù Firestore Rules chỉ yêu cầu trường size là string; cây mới có thể được lưu mà không nhập kích thước.

## Sửa
- Giữ catalog local khi Cloud push thất bại; không cho Cloud cũ ghi đè cây mới.
- Merge catalog theo `catalogId`, sau đó fallback name+size.
- Assignment item luôn resolve lại từ `plantKey/catalogId` ngay trước khi ghi Firestore.
- Không phụ thuộc `plantIndex` cũ để nhận diện cây.
- Cho phép size rỗng trong payload đơn (vẫn là string), phù hợp Rules; giao diện hiển thị “Không ghi kích thước”.
- Giữ nguyên 65×100 mm và footer hỗ trợ 0353636420 của V25.5.0.
