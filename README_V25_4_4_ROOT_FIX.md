# ROLL CÂY CẢNH V25.4.4 — ROOT FIX

V25.4.3 is the golden baseline. This version preserves the existing UI/business logic and applies only three requested fixes.

## 1. Admin account management
- Admin Control explicitly keeps the Tài khoản & phân quyền card visible.
- Admin can create a Firebase login for an existing employee, link/change employee, change role, and lock/unlock account.
- Role choices include packer, warehouse, procurement, manager, viewer.

## 2. Admin order printing
- The order print is now A4 portrait, not 65x100 mm.
- The user-provided third image is embedded as `order-print-background.jpg` and fills the entire A4 page.
- Printed content includes: plant name, size, quantity, order code, packing employee, packing date, print date, total quantity.
- Background is not scaled down into a small centered page.

## 3. Assignment quantity invariant
- Assignment quantities are taken only from `assignmentItems[].qty`.
- The total `packSize` is derived from those exact quantities.
- `1` is explicitly supported as `1 cây · không combo`.
- The previous fallback `Math.max(2, ...)` was removed.
- Example: Bàng sing C9 quantity 1, non-combo -> order item quantity 1.

## Validation
- JavaScript inline blocks: node --check.
- ZIP integrity.
- Static assertions for A4 order print, background asset, quantity invariant, and admin account card.
