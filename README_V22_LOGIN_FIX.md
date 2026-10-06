# V22 – Login race fix
- Fix Firebase login error: `Cannot read properties of null (reading 'signInWithEmailAndPassword')`.
- `CloudSync.init()` is now single-flight and awaited when login is pressed before initialization finishes.
- Login refuses gracefully if Firebase is still unavailable instead of calling a null auth object.
- Preserves V21 inventory flow and V20.9 assignment/pay adjustments.
