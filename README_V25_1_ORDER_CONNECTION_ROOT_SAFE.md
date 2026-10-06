# V25.1 – SURGICAL ORDER CONNECTION ROOT SAFE

Base: `QuanLyCayAPK_project_V25_1_ROOT_AUDITED.zip`.

Only the requested packing-order workflow was changed:

Admin assigns order → packer receives the existing Firestore listener notification → `XEM ĐƠN NGAY` opens the packer order panel using already-loaded listener/cache data → packer presses `NHẬN ĐƠN` → order moves to `ĐƠN ĐÃ NHẬN · CẦN HOÀN THÀNH` → packer takes proof photo → confirms completion → existing Firestore completion path stores proof/completion and existing labor calculation records pay.

Important safety scope:
- The `XEM ĐƠN NGAY` path does NOT call Auth/Firestore/go()/renderAll().
- It uses the already-loaded `/packingOrders` listener data and the local order cache.
- The login gate is explicitly hidden when entering the packer order panel so a transient auth/UI state cannot cover the order screen.
- The popup action is `type="button"` and stops default/bubbling behavior.
- Packer role/UID are captured from the authenticated order listener and reused for this navigation path.
- Admin manual packing-entry panel remains hidden for packers.
- No Firestore Rules changes.
- No inventory/catalog/rates/report/login business logic intentionally changed.

Accepted state is local to the packer's device because the existing Rules do not permit a packer to write a separate `accepted` status. Firestore remains `pending` until completion; completion continues through the existing authenticated packer write.
