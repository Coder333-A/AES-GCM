export async function generateKey() {
    return window.crypto.getRandomValues(new Uint8Array(32));
}

export async function encryptAES(plainText, key) {
    const iv = window.crypto.getRandomValues(new Uint8Array(12)); 
    const encoder = new TextEncoder();
    const data = encoder.encode(plainText);
    const cryptoKey = await window.crypto.subtle.importKey(
        "raw", key, { name: "AES-GCM" }, false, ["encrypt"]
    );
    const encryptedData = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv }, cryptoKey, data
    );
    return {
        encrypted: btoa(String.fromCharCode(...new Uint8Array(encryptedData))),
        iv: btoa(String.fromCharCode(...iv)),
        key: btoa(String.fromCharCode(...key))
    };
}

export async function decryptAES(encrypted, key, iv) {
    try {
        const cryptoKey = await window.crypto.subtle.importKey(
            "raw", Uint8Array.from(atob(key), c => c.charCodeAt(0)), { name: "AES-GCM" }, false, ["decrypt"]
        );
        const decryptedData = await window.crypto.subtle.decrypt(
            { name: "AES-GCM", iv: Uint8Array.from(atob(iv), c => c.charCodeAt(0)) },
            cryptoKey,
            Uint8Array.from(atob(encrypted), c => c.charCodeAt(0))
        );
        return new TextDecoder().decode(decryptedData);
    } catch (e) {
        return "Decryption failed! Invalid key or corrupted data.";
    }
}
