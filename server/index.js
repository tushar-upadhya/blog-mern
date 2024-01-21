import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.MD_DATABASE_URL)
  .then(() => {
    console.log("mb connected");
  })
  .catch((err) => {
    console.log("err:", err);
  });

// NABfIWacc4mrdWyC

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("PORT:", PORT);
});
