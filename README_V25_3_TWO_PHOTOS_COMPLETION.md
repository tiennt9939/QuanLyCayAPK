# V25.3 – Two-photo completion surgical fix

Base: ROLL_CAY_CANH_V25_3_PRINT_BY_EMPLOYEE_BATCH.

Only changed the packer completion proof requirement:
- A packing order now requires at least 2 completion photos before completion.
- Photo 1 and Photo 2 are stored in `completionImages`.
- `completionImage` is retained as the first photo for backward compatibility.
- Taking a new photo after two photos replaces Photo 2; it does not delete Photo 1.
- Existing order assignment, multi-item orders, printing, inventory, labor, reports, authentication, and Firebase Rules are otherwise untouched.
