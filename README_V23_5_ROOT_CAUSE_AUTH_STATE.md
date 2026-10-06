# V23.5 — ROOT CAUSE AUTH/NOTIFICATION STATE FIX

## Root cause found in V23.4
`CloudSync.ready` was incorrectly used as the prerequisite for the notification bell, while `ready` was only set to true after secondary/background work such as `reconcile()`, `pushNow()`, `loadPackerRecords()` and `loadAllPackerRecords()`. If any of those jobs failed or were slow, the app could already show `Đã kết nối · email` and still reject the bell with `Phiên đăng nhập chưa sẵn sàng`.

## V23.5 architecture
- `authReady` = Firebase Auth session + user profile/role are ready.
- `ready` = interactive session is usable; it no longer waits for secondary sync jobs.
- Canonical `/packingOrders` listener starts immediately after auth/profile readiness.
- Packer/admin background reconciliation is isolated with individual try/catch blocks and cannot invalidate an authenticated session.
- Bell waits for `authReady`, not for report/catalog reconciliation.
- `/packingOrders` remains the single source of truth for assignment workflow.

## Verification
- All inline JavaScript blocks were syntax-checked with Node.js.
- No Firestore Rules changes were made.
- No claim of APK build is made in this environment.
