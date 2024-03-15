import express from "express";
import routes from "./routes/index.js";
import connectMongoDB from "./config/dbconfig.js";
const app = express();
const port = 3000;
connectMongoDB("mongodb://localhost:27017");
routes(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
