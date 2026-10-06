# ROLL CÂY CẢNH — Multi-item Assignment + 65x100 Print

## Base
This source is based directly on `ROLL_CAY_CANH_V25_1_ADMIN_RESULT_DISPLAY_FINAL_SURGICAL.zip`, which was the user's working source.

## Only requested additions
1. Admin assignment can now build **one customer order containing multiple plant items**.
   - Choose plant + size + quantity.
   - Press `＋ THÊM CÂY` to temporarily add that item.
   - Choose the next plant/size/quantity and add again.
   - The staged items are saved together as **one `packingOrders` document**.
   - Total combo quantity is the sum of all item quantities (1–100).
2. Existing single-plant orders remain supported through the legacy fields.
3. On completion, labor pay is calculated across all plant items in the order using each item's size rate, plus any existing order-level adjustment.
4. On completion, stock consumption is calculated per plant/size item, so mixed orders subtract the correct plants from inventory.
5. Admin assignment list now has `🖨️ IN ĐƠN`.
6. Printed order is portrait **65 x 100 mm** and contains:
   - LOẠI CÂY: every plant item and quantity
   - QUY CÁCH: total plants / combo
   - NVĐH: assigned packing employee
   - NGÀY ĐÓNG: assigned date/time
   - ID: system order number / order ID
7. Android printing uses the native Android PrintManager bridge with a custom 65x100 mm media size. Browser fallback uses `window.print()`.

## Deliberately unchanged
- Firebase Firestore Rules
- Login/authentication
- Employee notification / receive-order flow
- Photo proof and completion flow
- Existing admin packing-entry flow
- Existing catalog, rates, inventory intake, reports, and controls except the necessary aggregation of multi-item completed orders
- Existing UI outside the requested assignment additions and print button

## Validation
- All inline JavaScript blocks pass `node --check`.
- Android SDK/Gradle runtime build was not available in this environment, so this source has not been claimed as phone-runtime tested here.
