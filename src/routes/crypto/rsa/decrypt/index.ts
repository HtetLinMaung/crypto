import { brewBlankExpressFunc } from "code-alchemy";
import { decryptRSA } from "../../../../utils/rsa";

export default brewBlankExpressFunc(async (req, res) => {
  const { encryptedText, privateKey } = req.body;
  const data = decryptRSA(encryptedText, privateKey);
  res.json({
    code: 200,
    message: "Decrypted successfully",
    data,
  });
});
