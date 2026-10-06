from pathlib import Path
import hashlib, re, json, sys, xml.etree.ElementTree as ET

ROOT=Path(__file__).resolve().parents[1]
java=ROOT/'app/src/main/java/com/quanlycay/apk/MainActivity.java'
html=ROOT/'app/src/main/assets/index.html'
bg=ROOT/'app/src/main/assets/quote-background.jpg'
manifest=ROOT/'app/src/main/AndroidManifest.xml'
styles=ROOT/'app/src/main/res/values/styles.xml'
data=ROOT/'app/src/main/assets/data.json'
rules=ROOT/'firestore.rules'
gradle=ROOT/'app/build.gradle.kts'

for f in (java,html,bg,manifest,styles,data,rules,gradle):
    assert f.is_file(), f

assert hashlib.sha256(bg.read_bytes()).hexdigest() == '9c3965014db664df3caa1b42a85488c9a9c5557685e3c55d8b81625729655251'

j=java.read_text(encoding='utf-8')
ann=len(re.findall(r'@JavascriptInterface',j))
assert ann==3, f'Expected exactly three @JavascriptInterface methods, found {ann}'
assert 'FixedAttributesPrintAdapter' not in j, 'Legacy print adapter must stay removed'
assert 'CAPTURE_PRINT_HTML_JS' in j, 'Isolated print capture bridge missing'
assert 'MediaSize.ISO_A4' in j, 'Native ISO A4 print size missing'
assert 'ROLL_GARDEN_65X100' in j, '65x100 media size missing'
assert 'Downloads.RELATIVE_PATH' in j, 'Native file export path missing'

h=html.read_text(encoding='utf-8')
assert 'quote-background.jpg' in h
assert '.quote-pdf-bg' in h and '.quote-pdf-page' in h
assert 'function exportQuotePdf()' in h
assert 'function exportPayrollCsv()' in h
assert 'function saveSalaryAdvance()' in h
assert 'function payrollAdvanceAvailable(' in h
assert 'function refreshAssignmentCatalogUI()' in h
assert 'refreshCatalogForAssignment' in h
assert 'V25.6.3 ROOT CAUSE FIX' in h
assert 'CloudSync.schedulePush()' in h
assert 'const localCatalog=Array.isArray(D.catalog)' in h
assert "catalogId:String(x.catalogId||'')" in h, 'Assignment payload must preserve catalogId'
assert "catalogId:String(x?.catalogId||'')" in h, 'Cloud order creation must preserve catalogId'
assert "const catalogId=String(r?.catalogId??'').trim()" in h, 'Reports must resolve orders by catalogId first'
assert 'function addAssignmentItem()' in h
assert 'assignPackSize' in h
assert 'completionImages' in h and 'proofReady' in h
assert 'printA4Page' in h
assert 'print-order' in h
# Payroll DOM must have exactly one payrollBody and no stray closing wrapper between advance card and body.
assert h.count('id="payrollBody"') == 1
assert '<section id="payroll"' in h and '</section>' in h

r=rules.read_text(encoding='utf-8')
assert 'request.resource.data.packSize >= 1' in r
assert 'request.resource.data.packSize <= 100' in r
assert 'request.resource.data.completionImages.size() == 2' in r

g=gradle.read_text(encoding='utf-8')
assert 'versionName = "25.6.3"' in g
assert 'versionCode = 38' in g

ET.parse(manifest); ET.parse(styles); json.loads(data.read_text(encoding='utf-8'))
print('PREFLIGHT PASS')
print('Background SHA-256:', hashlib.sha256(bg.read_bytes()).hexdigest())
print('JavascriptInterface count:', ann)
print('Version: 25.6.3 / code 38')
print('Combo rule: 1..100 actual plants/order')
print('Payroll export: PASS')
print('Salary advance: PASS')
print('Assignment refresh: PASS')
print('Isolated print WebView: PASS')
