# V25.1 – ADMIN RESULT BRIDGE FIX

Base: V25.1 ADMIN DAILY TOTALS FIX.

Only fixes the Admin aggregation bridge for completed packing orders.

The Admin daily/report calculations now merge completed orders from:
- `D.packingOrders`
- `D.packerRecords`
- `orderNotificationState.rows` (the live `/packingOrders` listener snapshot)

Rows are merged by order ID and completed status is normalized case-insensitively.
No Firebase Rules, employee workflow, UI, catalog, rates, inventory-entry workflow, or assignment flow was intentionally changed.
