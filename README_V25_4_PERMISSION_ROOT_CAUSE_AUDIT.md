# V25.4.3 — Permission/Catalog Root-Cause Audit

## Findings from source inspection (not screenshot inference)

1. `CloudSync` was declared as a top-level lexical `const`, but multiple UI/save/permission guards accessed it through `window.CloudSync`.
   In a WebView/browser, top-level `const` does not create a `window` property. This caused those guards and save/sync bridges to see `window.CloudSync` as undefined.

2. `deletePlant()` depended exclusively on `window.CloudSync.requirePerm('catalog')`, so catalog deletion was blocked even when the logged-in user had catalog permission.

3. `save()` only scheduled Cloud sync through `window.CloudSync`, so catalog changes could be saved locally but the Cloud push hook was skipped.

4. `savePlantEdit()` used a second, ad-hoc permission path instead of the canonical `CloudSync.state()` session. This created a second source of truth for role checking.

5. The application already canonicalizes legacy purchasing roles (`purchaser`, `purchasing`, etc.) to `procurement`, and `ROLE_PERMS.procurement` already contains `quote` + `catalog`. Therefore the permission table itself was not the root cause.

6. Firestore Rules already allow procurement access to `/apps/roll-cay-canh`, which is the current V25.4 catalog storage path. The nested `/config/.../plants` rules were inconsistent with the intended catalog permission, so they were aligned to permit procurement catalog CRUD as well.

## Fixes

- Export `CloudSync` to `window.CloudSync` after initialization so all legacy/global handlers reference the same canonical object.
- Make `savePlantEdit()` use only `CloudSync.state()` for authorization.
- Make `deletePlant()` use canonical `CloudSync.requirePerm('catalog')`.
- Make `save()` schedule through the bridged CloudSync object safely.
- Keep procurement permissions limited to `quote` + `catalog`.
- Keep admin as full-access role.
- Align `/config/{configId}/plants/{plantId}` Rules with procurement catalog CRUD without granting procurement packing/warehouse/report/admin permissions.

## Static validation

- Inline JavaScript `node --check`: PASS.
- Source ZIP integrity: PASS.
- Android source structure preserved.
- No business-flow changes to packing orders, inventory, labor, or reports.
