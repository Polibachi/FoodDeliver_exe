import express from "express";
import cors from "cors";
import multer from "multer";

import mongoose from "mongoose";

import { validationResult } from "express-validator";
import { postCreateValidation, registerValidation } from "./auth.js";
import { loginValidation } from "./auth.js";
import checkAuth from "./checkAuth.js";

import { register, login, getMe } from "./functions.js";
import * as postManager from "./postManager.js";

mongoose
  .connect(
    "mongodb+srv://admin:88888888@cluster0.laqq1zj.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("db is ok"))
  .catch(err => console.log("db is pizdec", err));

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.post("/register", registerValidation, register);
app.post("/login", loginValidation, login);
app.get("/me", checkAuth, getMe);

app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    url: "/uploads/${req.file.originalname}"
  });
});

app.post("/posts/create", checkAuth, postCreateValidation, postManager.create);
app.get("/posts/:id", postManager.getOne);
app.get("/posts", postManager.getAll);
app.get("/tags", postManager.getLastTags);

app.listen(process.env.PORT || 4444, err => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
