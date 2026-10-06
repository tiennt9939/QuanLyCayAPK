# V23.4 – AUTH / NOTIFICATION ROOT FIX

## Root cause addressed
The previous versions used the broad `ready` flag for the notification bell. `ready` was only set after secondary startup tasks such as reconcile/report loading completed. If one of those tasks failed, the UI could still show the authenticated account and data, while the bell reported “Phiên đăng nhập chưa sẵn sàng”.

## Changes
- Separate Firebase-auth/profile readiness (`authReady`) from secondary application startup readiness.
- Set the authenticated session usable immediately after Auth + profile + Firestore are ready.
- Start the canonical `/packingOrders` listener before reconcile/report tasks.
- The bell checks `authReady`, not the broad secondary-task `ready` flag.
- Secondary sync/report failures no longer force the user back toward login or disable the bell.
- `/packingOrders` remains the canonical source for assignment notifications.
- No Firestore Rules changes.

## Test target
Admin and packer must both be able to tap the bell immediately after login, see their canonical pending orders, and open the order list without the “session not ready” toast.
