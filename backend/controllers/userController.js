const asyncHandler = require("express-async-handler");

// @desc   Register a new user
// @route  /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please include all details");
  }
  res.send("Register Route");
});

// @desc   Login a new user
// @route  /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("Register Route");
});

module.exports = {
  registerUser,
  loginUser,
};