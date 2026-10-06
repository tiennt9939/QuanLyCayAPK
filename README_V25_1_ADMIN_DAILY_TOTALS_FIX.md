# V25.1 — ADMIN DAILY TOTALS FIX

Surgical patch based on `QuanLyCayAPK_project_V25_1_ADMIN_REPORT_FIX`.

Only fixes Admin aggregation of completed assigned packing orders:
- Daily "Đóng hàng" includes completed assigned-order quantities.
- Daily "Tiền công" includes completed assigned-order pay.
- Daily "Đơn hoàn tất" count is displayed.
- Report summary shows completed-order count for the selected date range.
- Completed assignment rows are merged from both `packingOrders` and `packerRecords` by order id so late/local hydration cannot make totals display 0.
- Existing per-order pay, completion photo, stock calculation, assignment flow, Firebase Rules, catalog, rates, inventory and Admin UI are otherwise untouched.
