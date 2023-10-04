import jwt from "jsonwebtoken";

const createToken = (data) => {
  let token = jwt.sign({ data }, "FOOD35", {
    algorithm: "HS256",
    expiresIn: "5y",
  });
  return token;
};

const checkToken = (token) => {
  return jwt.verify(token, "FOOD35");
};

const decodeToken = (token) => {
  return jwt.decode(token);
};

const lockApi = (req, res, next) => {
  try {
    let { token } = req.headers;
    checkToken(token);
    next();
  } catch (ext) {
    res.status(401).send("Không có quyền truy cập");
  }
};

export { createToken, checkToken, decodeToken, lockApi };
