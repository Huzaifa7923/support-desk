//routes only for authorised user
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const user = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get Token from header
      token = req.headers.authorization.split(" ")[1];

      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //get user from token
      req.user = await User.findById(decoded.id).select(-password);
      if (!req.user) {
        res.status(401);
        throw new Error("Not authirised");
      }
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorised");
    }
  }
});
module.exports = { protect };