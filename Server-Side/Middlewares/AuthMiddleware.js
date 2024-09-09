const jwt = require("jsonwebtoken");
const AuthModel = require("../Models/LoginAuthModel");

const AuthMiddleware = async (req, resp, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return resp.status(500).json({
      message: "Invalid HTTPS token not Provide 500",
    });
  }

  const jwtToken = token.replace("Bearer", "").trim();

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_TOKEN);

    const userData = await AuthModel.findOne({
      email: isVerified.email,
    }).select({
      password: 0,
    });

    req.user = userData;
    req.token = token;
    req.UserID = userData._id;

    next();
  } catch (error) {
    resp.status(405).json({
      message: "Unauthorized Access",
    });
  }
};

module.exports = AuthMiddleware;
