# V25.1 – PAY ONLY SURGICAL FIX

Base: `QuanLyCayAPK_project_V25_1_COMPLETE_STATUS_FIX.zip`

Scope: ONLY complete-order labor-pay calculation.

When a packer completes an assigned order, the app now snapshots:
- `payRate` = current labor rate for the order size
- `payAmount` = pack quantity × labor rate + existing pay adjustment
- `employeePay` = same calculated amount

The existing completed-order UI/reporting uses the saved `payAmount` when available, with the existing calculation as fallback for older completed orders.

No Firebase Rules, UI, assignment flow, inventory, catalog, prices, login, notification flow, or completion status logic was intentionally changed.
