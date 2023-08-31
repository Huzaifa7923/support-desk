const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Add user details"],
      ref: "User",
    },
    product: {
      type: String,
      enum: ["Macbook Pro", "ipad", "iphone", "android"],
      required: [true, "Please add product"],
    },
    description: {
      type: String,
      required: [true, "Please enter issues with the respective product"],
    },
    status: {
      type: String,
      enum: ["new", "open", "closed"],
      default: "new",
      required: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Ticket", ticketSchema);
