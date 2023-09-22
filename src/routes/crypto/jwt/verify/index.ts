import { brewBlankExpressFunc, throwErrorResponse } from "code-alchemy";
import jwt from "jsonwebtoken";

export default brewBlankExpressFunc(async (req, res) => {
  const { token, secret, options } = req.body;
  let data: any = null;
  try {
    data = jwt.verify(token, secret, options || {});
    res.json({
      code: 200,
      message: "Token verified",
      data,
    });
  } catch (err) {
    throwErrorResponse(401, err.message);
  }
});
