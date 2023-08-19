const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      // required:true
      //    OR
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add password"],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    //timrstamps for user 'created at' ....
    timestamps: true,
  }
);
//User -> model name
module.exports = mongoose.model("User", userSchema);
