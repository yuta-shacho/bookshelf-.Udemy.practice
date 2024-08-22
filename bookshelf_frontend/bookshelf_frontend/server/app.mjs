import path from "path";
import express from "express";
import apiRoutes from "./api-routes/index.mjs";
import env from "dotenv";
import "./helpers/db.mjs";
env.config();

const app = express();
const port = process.env.PORT || 8080;

app.use("/", express.static("build"));
//json受け取り
app.use(express.json());

import cors from "cors";
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//API
app.use("/api", apiRoutes);

app.get("*", function (req, res) {
  const indexHtml = path.resolve("build", "index.html");
  res.sendFile(indexHtml);
});

app.use(function (req, res) {
  res.status(404).json({ msg: "Page Not Found" });
});

//エラーハンドラー
app.use(function (err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({ msg: "不正なエラーが見つかりました。" });
});

app.listen(port, function () {
  console.log(`Sever Start: http://localhost:${port}`);
});
