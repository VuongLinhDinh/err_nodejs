import mongoose from "mongoose";
const dbUrl = process.env.DB_CONNECT || "mongodb://localhost:27017";
export default async function connectMongoDB(dbUrl) {
  try {
    //mongodb://127.0.0.1:27017/db_name
    //await mongoose.connect("mongodb://127.0.0.1:27017/db_nodejs");
    await mongoose.connect(dbUrl);
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!");
  }
}
