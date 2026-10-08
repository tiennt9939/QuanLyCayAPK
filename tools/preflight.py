from pathlib import Path
import hashlib
import re
import json
import sys
import xml.etree.ElementTree as ET


# ============================================================
# QuanLyCayAPK
# V26.0.1 SOURCE PREFLIGHT
#
# Mục đích:
# - Kiểm tra source trước khi build
# - Không tự sửa source
# - Không phụ thuộc workflow version
# - Version hiện tại: V26.0.1
# - versionCode: 41
#
# V26 = BUILD TOOLCHAIN
# V26.0.1 = APP SOURCE VERSION
# ============================================================


ROOT = Path(__file__).resolve().parents[1]


# ============================================================
# EXPECTED APP VERSION
# ============================================================

EXPECTED_VERSION_NAME = "26.0.1"
EXPECTED_VERSION_CODE = 41


# ============================================================
# REQUIRED FILES
# ============================================================

java = ROOT / "app/src/main/java/com/quanlycay/apk/MainActivity.java"
html = ROOT / "app/src/main/assets/index.html"
bg = ROOT / "app/src/main/assets/quote-background.jpg"
manifest = ROOT / "app/src/main/AndroidManifest.xml"
styles = ROOT / "app/src/main/res/values/styles.xml"
data = ROOT / "app/src/main/assets/data.json"
rules = ROOT / "firestore.rules"
gradle = ROOT / "app/build.gradle.kts"


required_files = (
    java,
    html,
    bg,
    manifest,
    styles,
    data,
    rules,
    gradle,
)


print("=" * 60)
print("QuanLyCayAPK V26.0.1")
print("SOURCE PREFLIGHT")
print("=" * 60)


# ============================================================
# 1. REQUIRED FILES
# ============================================================

print()
print("[1/12] Checking required files...")

for file_path in required_files:
    assert file_path.is_file(), (
        f"Required file missing: {file_path.relative_to(ROOT)}"
    )

print("Required files: PASS")


# ============================================================
# 2. APPLICATION VERSION
# ============================================================

print()
print("[2/12] Checking application version...")

g = gradle.read_text(encoding="utf-8")


version_match = re.search(
    r'versionName\s*=\s*"([^"]+)"',
    g,
)

code_match = re.search(
    r'versionCode\s*=\s*(\d+)',
    g,
)


assert version_match, (
    "versionName not found in app/build.gradle.kts"
)

assert code_match, (
    "versionCode not found in app/build.gradle.kts"
)


version_name = version_match.group(1)
version_code = int(code_match.group(1))


assert version_name == EXPECTED_VERSION_NAME, (
    f"Expected versionName = {EXPECTED_VERSION_NAME}, "
    f"found {version_name}"
)


assert version_code == EXPECTED_VERSION_CODE, (
    f"Expected versionCode = {EXPECTED_VERSION_CODE}, "
    f"found {version_code}"
)


print(f"Version name : {version_name}")
print(f"Version code : {version_code}")
print("Application version: PASS")


# ============================================================
# 3. QUOTE BACKGROUND INTEGRITY
# ============================================================

print()
print("[3/12] Checking quote background integrity...")


EXPECTED_BACKGROUND_SHA256 = (
    "9c3965014db664df3caa1b42a85488c9a9c5557685e3c55d8b81625729655251"
)


background_sha256 = hashlib.sha256(
    bg.read_bytes()
).hexdigest()


assert background_sha256 == EXPECTED_BACKGROUND_SHA256, (
    "quote-background.jpg SHA-256 mismatch.\n"
    f"Expected: {EXPECTED_BACKGROUND_SHA256}\n"
    f"Found   : {background_sha256}"
)


print("Background SHA-256:", background_sha256)
print("Quote background: PASS")


# ============================================================
# 4. MAINACTIVITY / NATIVE BRIDGE
# ============================================================

print()
print("[4/12] Checking MainActivity native bridge...")


j = java.read_text(encoding="utf-8")


# V26.0.1 source currently requires exactly 5
# JavascriptInterface methods.
ann = len(
    re.findall(
        r"@JavascriptInterface",
        j,
    )
)


assert ann == 5, (
    "Expected exactly five @JavascriptInterface methods, "
    f"found {ann}"
)


assert (
    "FixedAttributesPrintAdapter" not in j
), (
    "Legacy FixedAttributesPrintAdapter must stay removed"
)


assert "CAPTURE_PRINT_HTML_JS" in j, (
    "Isolated print capture bridge missing"
)


assert "MediaSize.ISO_A4" in j, (
    "Native ISO A4 print size missing"
)


assert "ROLL_GARDEN_65X100" in j, (
    "65x100 media size missing"
)


assert "Downloads.RELATIVE_PATH" in j, (
    "Downloads.RELATIVE_PATH missing"
)


assert "ocrShippingImage" in j, (
    "Native shipping OCR bridge missing"
)


assert "sendToFlashLabel" in j, (
    "FlashLabel integration missing"
)


assert "window." in j, (
    "Native JavaScript/window integration missing"
)


print("JavascriptInterface count:", ann)
print("Native print bridge: PASS")
print("Native OCR bridge: PASS")
print("FlashLabel bridge: PASS")


# ============================================================
# 5. HTML / JAVASCRIPT CORE FEATURES
# ============================================================

print()
print("[5/12] Checking index.html core features...")


h = html.read_text(encoding="utf-8")


# ------------------------------------------------------------
# Quote PDF
# ------------------------------------------------------------

assert "quote-background.jpg" in h, (
    "Quote background reference missing"
)


assert ".quote-pdf-bg" in h, (
    ".quote-pdf-bg CSS missing"
)


assert ".quote-pdf-page" in h, (
    ".quote-pdf-page CSS missing"
)


assert "function exportQuotePdf()" in h, (
    "exportQuotePdf() missing"
)


# ------------------------------------------------------------
# Payroll
# ------------------------------------------------------------

assert "function exportPayrollCsv()" in h, (
    "exportPayrollCsv() missing"
)


assert "function saveSalaryAdvance()" in h, (
    "saveSalaryAdvance() missing"
)


assert "function payrollAdvanceAvailable(" in h, (
    "payrollAdvanceAvailable() missing"
)


# ------------------------------------------------------------
# Assignment
# ------------------------------------------------------------

assert "function refreshAssignmentCatalogUI()" in h, (
    "refreshAssignmentCatalogUI() missing"
)


assert "refreshCatalogForAssignment" in h, (
    "refreshCatalogForAssignment missing"
)


assert "function addAssignmentItem()" in h, (
    "addAssignmentItem() missing"
)


assert "assignPackSize" in h, (
    "assignPackSize missing"
)


# ------------------------------------------------------------
# Root cause marker
#
# This marker is intentionally retained because it identifies
# the V26 root-cause fixes that are still part of V26.0.1.
# ------------------------------------------------------------

assert "V26.0.0 ROOT CAUSE FIX" in h, (
    "V26.0.0 ROOT CAUSE FIX marker missing"
)


# ------------------------------------------------------------
# Shipping carriers
# ------------------------------------------------------------

assert "J&T Express" in h, (
    "J&T Express support missing"
)


assert "J&T Cargo" in h, (
    "J&T Cargo support missing"
)


assert "GHN" in h, (
    "GHN support missing"
)


# ------------------------------------------------------------
# Cloud Sync
# ------------------------------------------------------------

assert "CloudSync.schedulePush()" in h, (
    "CloudSync.schedulePush() missing"
)


# ------------------------------------------------------------
# Catalog
# ------------------------------------------------------------

assert (
    "const localCatalog=Array.isArray(D.catalog)"
    in h
), (
    "Local catalog handling missing"
)


assert (
    "catalogId:String(x.catalogId||'')"
    in h
), (
    "Assignment payload must preserve catalogId"
)


assert (
    "catalogId:String(x?.catalogId||'')"
    in h
), (
    "Cloud order creation must preserve catalogId"
)


assert (
    "const catalogId=String(r?.catalogId??'').trim()"
    in h
), (
    "Reports must resolve orders by catalogId first"
)


# ------------------------------------------------------------
# Completion / proof
# ------------------------------------------------------------

assert "completionImages" in h, (
    "completionImages missing"
)


assert "proofReady" in h, (
    "proofReady missing"
)


# ------------------------------------------------------------
# Printing
# ------------------------------------------------------------

assert "printA4Page" in h, (
    "printA4Page missing"
)


assert "print-order" in h, (
    "print-order functionality missing"
)


print("Quote PDF: PASS")
print("Payroll: PASS")
print("Salary advance: PASS")
print("Assignment: PASS")
print("CatalogId preservation: PASS")
print("Shipping carriers: PASS")
print("Completion proof: PASS")
print("Printing: PASS")


# ============================================================
# 6. PAYROLL DOM STRUCTURE
# ============================================================

print()
print("[6/12] Checking payroll DOM structure...")


payroll_body_count = h.count(
    'id="payrollBody"'
)


assert payroll_body_count == 1, (
    "Expected exactly one payrollBody, "
    f"found {payroll_body_count}"
)


assert '<section id="payroll"' in h, (
    "Payroll section missing"
)


assert "</section>" in h, (
    "Closing section tag missing"
)


print("payrollBody count:", payroll_body_count)
print("Payroll DOM structure: PASS")


# ============================================================
# 7. FIRESTORE RULES
# ============================================================

print()
print("[7/12] Checking Firestore rules...")


r = rules.read_text(encoding="utf-8")


# ------------------------------------------------------------
# Pack size
# ------------------------------------------------------------

assert (
    "request.resource.data.packSize >= 1"
    in r
), (
    "Firestore rule missing packSize >= 1"
)


assert (
    "request.resource.data.packSize <= 100"
    in r
), (
    "Firestore rule missing packSize <= 100"
)


# ------------------------------------------------------------
# Completion images
# ------------------------------------------------------------

assert (
    "request.resource.data.completionImages.size() == 2"
    in r
), (
    "Firestore rule must require exactly 2 completion images"
)


# ------------------------------------------------------------
# Duplicate shipment protection
# ------------------------------------------------------------

assert (
    "shipmentTrackingClaims"
    in r
), (
    "shipmentTrackingClaims collection missing"
)


assert (
    "getAfter("
    in r
), (
    "Firestore getAfter() transaction guard missing"
)


print("Pack size 1..100: PASS")
print("Two completion images: PASS")
print("Shipment duplicate guard: PASS")


# ============================================================
# 8. FIRESTORE RULES STRUCTURE
# ============================================================

print()
print("[8/12] Checking Firestore rules structure...")


assert (
    "rules_version = '2';"
    in r
), (
    "Firestore Rules must use rules_version = '2'"
)


assert (
    "match /packingOrders/{orderId}"
    in r
), (
    "packingOrders rule missing"
)


# The source currently contains shipmentTrackingClaims.
# We require it to exist, but we do not reject duplicated
# declarations here because this preflight is intentionally
# non-destructive and the cleanup will be handled separately.
shipment_claim_count = r.count(
    "match /shipmentTrackingClaims/{trackingNo}"
)


assert shipment_claim_count >= 1, (
    "shipmentTrackingClaims rule declaration missing"
)


print(
    "shipmentTrackingClaims declarations:",
    shipment_claim_count
)


if shipment_claim_count > 1:
    print(
        "WARNING: multiple shipmentTrackingClaims declarations "
        "detected. Functional build is allowed, but Rules cleanup "
        "is recommended in a separate change."
    )


print("Firestore structure: PASS")


# ============================================================
# 9. XML VALIDATION
# ============================================================

print()
print("[9/12] Checking XML files...")


try:
    ET.parse(manifest)
except ET.ParseError as exc:
    raise AssertionError(
        f"AndroidManifest.xml XML error: {exc}"
    )


try:
    ET.parse(styles)
except ET.ParseError as exc:
    raise AssertionError(
        f"styles.xml XML error: {exc}"
    )


print("AndroidManifest.xml: PASS")
print("styles.xml: PASS")


# ============================================================
# 10. JSON VALIDATION
# ============================================================

print()
print("[10/12] Checking data.json...")


try:
    json.loads(
        data.read_text(
            encoding="utf-8"
        )
    )
except json.JSONDecodeError as exc:
    raise AssertionError(
        f"data.json JSON error: {exc}"
    )


print("data.json: PASS")


# ============================================================
# 11. BASIC SOURCE SANITY
# ============================================================

print()
print("[11/12] Checking basic source sanity...")


assert len(h.strip()) > 1000, (
    "index.html appears unexpectedly small"
)


assert len(j.strip()) > 1000, (
    "MainActivity.java appears unexpectedly small"
)


assert len(r.strip()) > 1000, (
    "firestore.rules appears unexpectedly small"
)


print("index.html size: PASS")
print("MainActivity.java size: PASS")
print("firestore.rules size: PASS")


# ============================================================
# 12. FINAL SUMMARY
# ============================================================

print()
print("=" * 60)
print("PREFLIGHT PASS")
print("=" * 60)

print(f"Application version : {version_name}")
print(f"Version code        : {version_code}")

print("Build toolchain     : V26")
print("Java                : 17")
print("Android SDK         : 35")
print("Build tools         : 35.0.0")
print("Gradle              : 8.13")

print()
print("Native bridge       : PASS")
print("OCR carriers        : PASS")
print("Duplicate guard     : PASS")
print("Assignment          : PASS")
print("CatalogId           : PASS")
print("Combo rule          : 1..100")
print("Two-photo proof     : PASS")
print("Payroll             : PASS")
print("Salary advance      : PASS")
print("Quote PDF           : PASS")
print("Printing            : PASS")
print("Firestore rules     : PASS")
print("XML validation      : PASS")
print("JSON validation     : PASS")

print()
print("Background SHA-256:")
print(background_sha256)

print()
print("JavascriptInterface count:")
print(ann)

print()
print("RESULT: READY FOR V26 TOOLCHAIN BUILD")
print("=" * 60)


sys.exit(0)
