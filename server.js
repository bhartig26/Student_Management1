const express = require("express");

require("dotenv").config();

const connectDB = require("./config/db");

const app = express();
app.use(express.json());
connectDB();
 app.use("/api/auth", require("./routes/authRoutes"));
 app.use("/courses",require("./routes/courseRoutes"))



app.listen(process.env.PORT, () => {
  console.log(`server running on PORT  ${process.env.PORT}`);
});
