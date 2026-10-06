V25 root fixes

1. Bell row click no longer depends on implicit `event` in Android WebView.
2. Packer order screen explicitly separates pending and completed orders.
3. Clicking a bell order loads the full assigned order set and scrolls to the selected order.
4. `/packingOrders` is canonical; automatic legacy migration is disabled so deleted orders cannot resurrect after Sync.
5. Manual local changes set a dirty flag; reconcile never overwrites dirty local data with older/newer Cloud data. It pushes dirty data first.
6. Successful push clears dirty flag.
7. Admin order deletion removes the canonical Firestore document and local/cache copies.
No Firestore Rules changes.
