// const { error } = require("console");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB CONNECTED:${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(`ERROR:${err.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
