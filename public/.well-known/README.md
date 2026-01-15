# Archivos de Verificación para Universal Links y App Links

Estos archivos son necesarios para que iOS y Android reconozcan que tu dominio puede abrir la app nativa directamente.

## ⚠️ IMPORTANTE: Datos que debes actualizar

### 1. `apple-app-site-association` (iOS Universal Links)

**Reemplazar:**
- `TEAM_ID` → Tu Apple Team ID (obtenerlo en [Apple Developer Portal](https://developer.apple.com/account) > Membership)

**Formato esperado:**
```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "ABC123DEF4.com.stvrae.idiliotv",
        "paths": ["/es/show/*", "/es/player/*", "/en/show/*", "/en/player/*"]
      }
    ]
  }
}
```

### 2. `assetlinks.json` (Android App Links)

**Reemplazar:**
- `SHA256_FINGERPRINT_AQUI` → El SHA256 fingerprint de tu certificado de firma de Android

**Cómo obtener el fingerprint:**
```bash
# En el repositorio de la app React Native/Expo
eas credentials --platform android

# O si tienes el keystore directamente:
keytool -list -v -keystore tu-keystore.jks -alias tu-alias
```

**Formato esperado:**
```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.stvrae.idilio",
      "sha256_cert_fingerprints": [
        "AA:BB:CC:DD:EE:FF:00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33:44:55:66:77:88:99"
      ]
    }
  }
]
```

## Verificación

Después de actualizar estos archivos y hacer deploy:

1. **iOS**: Verifica en [Apple's Validator](https://search.developer.apple.com/appsearch-validation-tool/)
2. **Android**: Verifica con `adb shell pm get-app-links com.stvrae.idilio`

## Notas

- Los archivos deben servirse con `Content-Type: application/json` (ya configurado en `next.config.ts`)
- El archivo `apple-app-site-association` NO debe tener extensión `.json`
- Ambos archivos deben ser accesibles sin autenticación en:
  - `https://www.idilio.tv/.well-known/apple-app-site-association`
  - `https://www.idilio.tv/.well-known/assetlinks.json`
