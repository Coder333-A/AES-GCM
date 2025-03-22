# 🔐 AES-256-GCM Encryption & Decryption Module (`JS_AES.js`)

This module implements **AES-256-GCM encryption and decryption** using the **Web Crypto API**.  
It ensures **data confidentiality, integrity, and authenticity** when handling sensitive information.

---

## 🚀 Features

✅ **AES-256-GCM (Galois Counter Mode)** – Provides authenticated encryption  
✅ **Random IV (Initialization Vector)** – Prevents pattern detection & replay attacks  
✅ **Base64 Encoding** – Ensures safe transmission and storage of encrypted data  
✅ **Error Handling** – Returns secure error messages on decryption failures  
✅ **Asynchronous Operations** – Uses `async/await` for seamless execution  

---

## 📜 Usage

### 1️⃣ **Import the Module**
```javascript
import { generateKey, encryptAES, decryptAES } from './JS_AES.js';
```

### 2️⃣ **Generate a Secure 256-bit Key**
```javascript
const key = await generateKey();
```

### 3️⃣ **Encrypt Data**
```javascript
const text = "Sensitive Information";
const encryptedData = await encryptAES(text, key);
console.log(encryptedData);
```
📌 **Output Example:**
```json
{
  "encrypted": "Base64_Encrypted_Text",
  "iv": "Base64_IV",
  "key": "Base64_Key"
}
```

### 4️⃣ **Decrypt Data**
```javascript
const decryptedText = await decryptAES(encryptedData.encrypted, encryptedData.key, encryptedData.iv);
console.log(decryptedText);  // "Sensitive Information"
```

---

## 🔐 Security Considerations
⚠️ **Never expose encryption keys in frontend code**  
⚠️ **Use HTTPS** to prevent man-in-the-middle (MITM) attacks  
⚠️ **Rotate keys periodically** to maintain security  

---

### 🔐 `JS_AES.js` (Encryption Module)

~i~

---

## 📌 Example Usage

```javascript
import { generateKey, encryptAES, decryptAES } from './JS_AES.js';
const key = await generateKey();
const text = "Sensitive Information";
const encryptedData = await encryptAES(text, key);
console.log(encryptedData);
```

---

## 🎯 Why Use This?
- 🔹 **AES-256-GCM is secure** and widely used in military, banking, and secure communication.  
- 🔹 **Asynchronous API** ensures smooth performance for web applications.  
- 🔹 **Encryption + Authentication** prevents tampering or unauthorized modifications.  
- 🔹 **Fully Frontend Compatible** – No backend needed unless storing keys securely.  

---

## 📜 License
💡 **Close-source** – Feel free to use, but don't fork it or edit it, just import it and use and ensure proper security practices!  

---
