async function code() {
        const input = btoa(document.getElementById("input").value);
        const key = document.getElementById("key").value;
        document.getElementById("output").value = atob(await xorCipherDecipher(input, key));
}

document.getElementById("input").addEventListener("input", code)
document.getElementById("key").addEventListener("input", code)

async function hashToBytes(message) {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        return new Uint8Array(hashBuffer);
}

async function generateKeystream(seed, length) {
        let keystream = new Uint8Array(length);
        let counter = bytesGenerated = 0;
        while (bytesGenerated < length) {
                const hash = await hashToBytes(seed + counter);
                const remaining = length - bytesGenerated;
                const bytesToCopy = Math.min(remaining, hash.length);
                keystream.set(hash.slice(0, bytesToCopy), bytesGenerated);
                bytesGenerated += bytesToCopy;
                counter++;
        }
        return keystream;
}

async function xorCipherDecipher(text, seed) {
        const textBytes = Uint8Array.from(atob(text), c => c.charCodeAt(0));
        const keystream = await generateKeystream(seed, textBytes.length);
        const resultBytes = new Uint8Array(textBytes.length);
        for (let i = 0; i < textBytes.length; i++) {
                resultBytes[i] = textBytes[i] ^ keystream[i];
        }
        return btoa(String.fromCharCode(...resultBytes));
}
