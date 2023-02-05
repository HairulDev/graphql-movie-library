const jwt = require("jsonwebtoken");
const { secretKey } = require("#config/vars");

const verifyApiKey = (req, res, next) => {
  try {
    let token = req.headers["x-api-key"];
    if (!token) {
      return res.status(401).json({
        status: "ERROR",
        statusCode: 401,
        message: "API Key is not supplied.",
        errors: [],
      });
    }
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: "ERROR",
          statusCode: 401,
          message: "API Key is not valid.",
          errors: [err.message],
        });
      } else {
        next();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  verifyApiKey,
};
