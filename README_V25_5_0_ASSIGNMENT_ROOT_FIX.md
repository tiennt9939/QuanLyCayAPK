# V25.5.0 — Assignment employee validation + 65x100 print footer fix

## Root cause fixed
The assignment form filtered packer accounts with `employeeId != null`, but the final submit validation used a truthy check (`u.employeeId`). If an existing employee profile stored the first employee ID as numeric `0`, the dropdown displayed the employee correctly but the submit step rejected the target and showed the misleading generic validation toast. V25.5.0 treats employeeId `0` as valid and normalizes it to a string.

## Assignment behavior
- Validate employee selection, employee profile, item list, total quantity, and order count separately.
- No generic validation message when the actual dependency is the employee profile.
- Firestore payload remains primitive-only and uses the selected employee UID.
- Existing catalogId-based catalog handling is preserved.

## Printing
- Packing label remains 65 x 100 mm.
- No table borders.
- Roll Garden logo at top-left.
- Compact order information.
- Footer explicitly includes: `Mọi chi tiết cần hỗ trợ, xin liên hệ SĐT: 0353636420`.
- Footer spacing/font was tightened to prevent clipping.
- Quote printing remains A4.
