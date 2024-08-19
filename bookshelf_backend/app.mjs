import express from "express";
import apiRoutes from "./server/api-routes/index.mjs";
import env from "dotenv";
env.config();

const app = express();
const port = process.env.PORT || 8080;
//json受け取り
app.use(express.json());

//API
app.use("/api", apiRoutes);

app.listen(port, function () {
  console.log(`Sever Start: http://localhost:${port}`);
});
