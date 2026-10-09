plugins {
    id("com.android.application")
}

android {
    namespace = "com.quanlycay.apk"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.quanlycay.apk"
        minSdk = 23
        targetSdk = 35

        versionCode = 42
        versionName = "26.1.0"
    }
}

dependencies {
    implementation("com.google.mlkit:text-recognition:16.0.1")
}
