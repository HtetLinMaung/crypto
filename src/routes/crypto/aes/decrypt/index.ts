import { brewBlankExpressFunc } from "code-alchemy";
import { decryptAES } from "../../../../utils/aes";

export default brewBlankExpressFunc(async (req, res) => {
  const { text, key, algorithm } = req.body;
  const data = decryptAES(text, key, algorithm || "aes-256-cbc");
  res.json({
    code: 200,
    message: "Decrypted successfully",
    data,
  });
});
