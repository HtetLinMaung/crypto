import { brewBlankExpressFunc } from "code-alchemy";
import { encryptRSA } from "../../../../utils/rsa";

export default brewBlankExpressFunc(async (req, res) => {
  const { text, publicKey } = req.body;
  const data = encryptRSA(text, publicKey);
  res.json({
    code: 200,
    message: "Encrypted successfully",
    data,
  });
});
