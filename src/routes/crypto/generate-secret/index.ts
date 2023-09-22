import { brewBlankExpressFunc } from "code-alchemy";
import generateSecret from "../../../utils/generate-secret";

export default brewBlankExpressFunc(async (req, res) => {
  const length = parseInt(req.query.length as string);
  const data = generateSecret(length);
  res.json({
    code: 200,
    message: "Secret was successfully generated",
    data,
  });
});
