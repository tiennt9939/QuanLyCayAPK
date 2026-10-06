# V23.2.3 – PACKER BELL / CRASH FINAL FIX

## Root cause found in V23.2.2
The packer notification click path still called `go('day','pack')` inside `openOrderFromAlert()` even though V23.2.2 was intended to avoid that path. `go()` invokes `renderDay()` and the manual pack-entry state initialization (`setEntryMode()` / `syncPackSelection()`). During the auth/WebView restoration window this can touch incomplete UI state and cause the WebView to reload/lose the in-memory Firebase session. That explains the sequence: first click -> app appears to leave/reload; next click -> “Phiên đăng nhập chưa sẵn sàng” or 0 orders.

## Fix
- Packer notification click no longer calls `go('day','pack')`.
- It uses `activatePackerOrdersView()` directly.
- The selected order is not forced into `selectedOrderId`; the user selects it with the existing `NHẬN / ĐÓNG ĐƠN NÀY` button.
- The current packer order list is persisted before switching the view.
- If the bell is tapped while Firebase Auth state is still restoring, the code briefly checks Firebase's `currentUser` and waits 120ms before declaring the session unavailable.
- Admin flow is unchanged.
- Firestore Rules are unchanged.

## Test
All inline JavaScript blocks were extracted and checked with `node --check`.
No APK build is claimed here; build remains the GitHub Actions step.
