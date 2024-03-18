import express from "express";
import routes from "./routes/index.js";
import connectMongoDB from "./config/dbconfig.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_CONNECT || "mongodb://localhost:27017";
connectMongoDB(dbUrl);
routes(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
