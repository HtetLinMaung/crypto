import { brewBlankExpressFunc } from "code-alchemy";
import generatePassword from "../../../utils/generate-password";

export default brewBlankExpressFunc(async (req, res) => {
  const length = parseInt(req.query.length as string);
  const data = generatePassword(length);
  res.json({
    code: 200,
    message: "Password was successfully generated",
    data,
  });
});
