# V24 — Bell root fix

## Root cause
The bell action was incorrectly coupled to the Firebase Auth/session-repair path. The app could already have 8 permission-scoped `/packingOrders` rows from its realtime listener (and display the badge), yet a transient WebView Auth state could make the bell enter the misleading session error.

## Fix
The bell now treats `orderNotificationState.rows` from the canonical `/packingOrders` listener as the first source and opens the notification immediately when pending rows exist. It only performs a Firestore refresh when no cached/listener rows exist. The old `ensureActionSession()` gate and the old “Không xác nhận được phiên Firebase hiện tại” bell error are removed from the bell path.

`openOrderFromAlert()` likewise uses the listener-owned role/rows and does not require a transient Auth gate.

## Scope
No Firestore Rules changes. No business-data schema changes. Existing UI/functionality preserved.

## Verification
Inline JavaScript blocks are syntax-checked separately after packaging. Runtime APK/device verification still requires building/installing the APK.
