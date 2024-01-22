import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./route/user.route.js";

dotenv.config();

mongoose
  .connect(
    process.env.mongodb
    // "mongodb+srv://nitove8116:8cgkBr4Xw8GXzAq8@cluster0.cfcr0hn.mongodb.net/blog-m?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mb connected");
  })
  .catch((err) => {
    console.log("err:", err);
  });

const app = express();
const PORT = 3000;
//
app.listen(PORT, () => {
  console.log("PORT:", PORT);
});

app.use("/server/user", UserRoutes);
