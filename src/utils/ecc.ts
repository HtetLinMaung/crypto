// import crypto from "crypto";

// interface KeyPair {
//   privateKey: Buffer;
//   publicKey: Buffer;
// }

// export function generateECCKeyPair(): KeyPair {
//   const { privateKey, publicKey } = crypto.generateKeyPairSync("ec", {
//     namedCurve: "secp256k1",
//   });
//   return { privateKey, publicKey };
// }

// export function encryptECC(text: string, publicKey: Buffer): string {
//   const buffer = Buffer.from(text);
//   const { ciphertext, iv } = crypto.publicEncrypt(
//     {
//       key: publicKey,
//       padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
//     },
//     buffer
//   );
//   return JSON.stringify({
//     ciphertext: ciphertext.toString("base64"),
//     iv: iv.toString("base64"),
//   });
// }

// export function decryptECC(
//   encryptedText: string,
//   privateKey: Buffer,
//   iv: string
// ): string {
//   const { ciphertext } = JSON.parse(encryptedText);
//   const buffer = Buffer.from(ciphertext, "base64");
//   const decrypted = crypto.privateDecrypt(
//     {
//       key: privateKey,
//       padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
//     },
//     Buffer.concat([Buffer.from(iv, "base64"), buffer])
//   );
//   return decrypted.toString();
// }
