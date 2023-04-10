const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.getToken = (name, id, role) => {
  const token = jwt.sign(
    { username: name, uid: id, role: role },
    process.env.JWTEC || "defaultsecret",
    {
      expiresIn: "1d",
    }
  );
  return token;
};
