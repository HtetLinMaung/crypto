import crypto from "crypto";

export function encryptRSA(text: string, publicKey: string): string {
  const buffer = Buffer.from(text);
  const encrypted = crypto.publicEncrypt(publicKey, buffer);
  return encrypted.toString("base64");
}

export function decryptRSA(encryptedText: string, privateKey: string): string {
  const buffer = Buffer.from(encryptedText, "base64");
  const decrypted = crypto.privateDecrypt(privateKey, buffer);
  return decrypted.toString();
}

export function generateRSAKeyPair() {
  return crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  });
}
