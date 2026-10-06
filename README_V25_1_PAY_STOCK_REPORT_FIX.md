# V25.1 PAY + STOCK + REPORT FIX — SURGICAL

Base: V25.1 PAY_STOCK_REPORT_FIX_ROOT.

Only fixes the final aggregation path for completed assigned orders:
- completed order date prioritizes completedDate/completedAtMs;
- plantIndex is resolved from plantName + size if missing/stale;
- employee daily totals use completed assigned orders;
- stock deduction uses completed assigned orders with a valid completion date;
- existing per-order payAmount/payRate and UI remain unchanged.

No Firebase Rules, Admin assignment UI, login, notification, receive flow, photo flow, catalog, rates, or inventory-entry UI was intentionally changed.
