
from pathlib import Path
import hashlib, re, json, sys, xml.etree.ElementTree as ET

ROOT=Path(__file__).resolve().parents[1]
java=ROOT/'app/src/main/java/com/quanlycay/apk/MainActivity.java'
html=ROOT/'app/src/main/assets/index.html'
bg=ROOT/'app/src/main/assets/quote-background.jpg'
manifest=ROOT/'app/src/main/AndroidManifest.xml'
styles=ROOT/'app/src/main/res/values/styles.xml'
data=ROOT/'app/src/main/assets/data.json'

assert java.is_file(), java
assert html.is_file(), html
assert bg.is_file(), bg
assert manifest.is_file(), manifest
assert styles.is_file(), styles
assert data.is_file(), data
assert hashlib.sha256(bg.read_bytes()).hexdigest() == '9c3965014db664df3caa1b42a85488c9a9c5557685e3c55d8b81625729655251'

j=java.read_text(encoding='utf-8')
ann=len(re.findall(r'@JavascriptInterface',j))
assert ann==1, f'Expected exactly one @JavascriptInterface, found {ann}'
assert '@JavascriptInterface\n        @JavascriptInterface' not in j
assert 'public void printA4Page(String jobName)' in j

h=html.read_text(encoding='utf-8')
assert "quote-background.jpg" in h
assert '.quote-pdf-bg' in h and '.quote-pdf-page' in h
assert 'function exportQuotePdf()' in h
assert 'PAGE_ROWS=8' in h
assert 'printA4Page' in h
assert 'refreshCatalogForAssignment' in h
assert 'dayOrdersDone' in h
assert 'print-order' in h

ET.parse(manifest); ET.parse(styles); json.loads(data.read_text(encoding='utf-8'))
print('PREFLIGHT PASS')
print('Background SHA-256:', hashlib.sha256(bg.read_bytes()).hexdigest())
print('JavascriptInterface count:', ann)
