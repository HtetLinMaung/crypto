import { brewBlankExpressFunc } from "code-alchemy";
import { encryptAES } from "../../../../utils/aes";

export default brewBlankExpressFunc(async (req, res) => {
  const { text, key, algorithm } = req.body;
  const data = encryptAES(text, key, algorithm || "aes-256-cbc");
  res.json({
    code: 200,
    message: "Encrypted successfully",
    data,
  });
});
