# V23.7 — Single Source of Truth for Firebase Auth session

V23.6 still allowed the bell to depend on mutable `authReady` through `sessionReady`. V23.7 removes that dependency from `sessionUsable()`. The authoritative runtime identity is `firebase.auth().currentUser`; the action gate verifies the matching `/users/{uid}` profile and active status.

Bell: `openOrderNotifications()` -> `CloudSync.ensureActionSession()` -> currentUser -> users/{uid} -> `/packingOrders` listener -> orders. Background sync jobs cannot make the bell falsely report an unauthenticated session.

`/packingOrders` remains the single source of truth. No Firestore Rules changes.
