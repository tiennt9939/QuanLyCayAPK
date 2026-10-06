V25.1 root-to-end audit

Verified/fixed:
1. Bell opens cached/listener order rows without transient Auth gate.
2. Bell row click calls openOrderFromAlert directly; no implicit WebView event dependency.
3. Packer view separates pending and completed orders.
4. /packingOrders is canonical; legacy migration is not called.
5. Sync pushes dirty local shared data before cloud reconciliation.
6. Admin order deletion no longer clears the global dirty flag, preventing unrelated unsynced stock/daily changes from being overwritten later.
7. Admin completion evidence is retained/displayed via proofImages.
8. App version metadata updated to V25.1.
9. GitHub workflow in this package supports source-at-root or arbitrary ZIP names.

Important: the screenshot build failure is from the workflow currently active in the GitHub repository, which still expects QuanLyCayAPK_project.zip. The workflow bundled here does not have that hard-coded dependency.
