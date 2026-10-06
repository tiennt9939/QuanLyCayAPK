# V25.1 — COMPLETE ONLY SURGICAL FIX

Base: V25.1 RECEIVE_ONLY / current working source.

## Only change
Fixed the employee completion button calling `CloudSync.ensureActionSession(...)` directly, although that function is exposed through `CloudSync.state().ensureActionSession(...)` in this source.

The completion flow now uses the existing CloudSync state API, preserving the working receive/order UI and existing Firestore completion logic.

## Preserved
- Existing V25.1 employee order UI
- Admin assignment UI and logic
- Receive order flow
- Camera/proof image flow
- Firestore Rules
- Inventory/catalog/rates/reports
- Existing completion and labor calculation logic

No unrelated changes were made.
