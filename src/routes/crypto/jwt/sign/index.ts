import jwt from "jsonwebtoken";
import { brewBlankExpressFunc } from "code-alchemy";

export default brewBlankExpressFunc(async (req, res) => {
  const { payload, secret, options } = req.body;
  const token = jwt.sign(payload, secret, options || {});
  res.json({
    code: 200,
    message: "Jwt token has been signed",
    data: token,
  });
});
