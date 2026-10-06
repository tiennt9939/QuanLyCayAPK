# V25.1 – ADMIN REPORT / COMPLETED ORDERS SURGICAL FIX

Base: V25.1 PAY_STOCK_REPORT_FINAL_FIX.

Only admin-side reporting was adjusted:
- Normalize employee-name casing when merging completed assigned orders into admin totals.
- Admin daily detail now includes completed assigned-order quantity/pay.
- Admin daily completed-order card shows total orders, total plants, total pay, and per-employee totals.
- 7-day payroll summary includes completed assigned orders.
- Admin report includes a dedicated completed-assignment summary by employee and total.

No changes to the employee order workflow, UI, Firebase Rules, inventory intake, catalog, rates, login, or assignment flow.
