# ROLL CAY CANH V23.2 — COMPLETION AUDIT

This package is based directly on V23.1 FULL STABILITY AUDITED and keeps the existing UI and Firebase project.

## Fixes included

1. Packer notification bell now performs a direct Firestore read when the user actively opens the bell. The query is constrained by `assignedUid == auth.uid`, matching the Firestore rule model.
2. A Cloud read error is no longer converted into "0 orders"; the app keeps listener/cache data and shows an error instead.
3. Completed packer orders are included in inventory opening/closing/stock calculations without copying them into `D.daily`, avoiding double counting.
4. Packer reports and daily pay now include `payAdjustment`.
5. Admin report aggregation now includes packer pay adjustments.
6. Admin quantity editing of a completed packer order updates both `qty` and `packSize`, keeping the order source consistent.
7. Firestore order-listener errors now surface a useful status instead of silently failing.

## Intentionally not changed

- Existing UI/layout.
- Firebase project `roll-cay-canh`.
- Existing Firestore collections.
- Existing Firestore Rules.
- Login persistence (LOCAL).
- Admin assignment workflow.

## Verification

- All inline JavaScript blocks pass `node --check`.
- This environment does not have Gradle installed, so an APK build was not performed here.
- Firebase production data cannot be directly verified from this local source audit. The app must be tested against the live project after building.
