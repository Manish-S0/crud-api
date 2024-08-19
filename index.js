import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());

dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;



mongoose.connect(MONGO_URI).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.log("server error", err);
});

app.use("/api/user", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
