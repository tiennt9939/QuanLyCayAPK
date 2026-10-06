# V23.2.2 – PACKER ORDER OPEN / WEBVIEW CRASH FIX

Fixes the exact flow: packer logs in -> notification shows assigned orders -> tapping XEM ĐƠN NGAY must not re-query/clear the valid list or run the broad day render path that can destabilize the WebView.

Changes:
- Packer notification opening prefers listener/cache data first.
- Added per-UID local order cache for resilience across WebView reloads.
- Packer "XEM ĐƠN NGAY" uses a dedicated safe navigation path instead of the broad go('day','pack') render path.
- Re-opening a packer session restores cached assigned orders before Firestore listener refreshes them.
- Firestore Rules are unchanged.
