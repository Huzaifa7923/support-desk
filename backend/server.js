const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  //   res.send("Hello");
  res.status(200).json({ messege: "gnerngijern" });
});

// middlewares
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
