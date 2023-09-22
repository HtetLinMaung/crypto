import { brewBlankExpressFunc } from "code-alchemy";
import { generateRSAKeyPair } from "../../../../utils/rsa";

export default brewBlankExpressFunc(async (req, res) => {
  const { publicKey, privateKey } = generateRSAKeyPair();
  res.json({
    code: 200,
    message: "RSA key pair was successfully generated",
    data: {
      publicKey,
      privateKey,
    },
  });
});
