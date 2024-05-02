import express from "express";
import cors from "cors";
import connectdb from "./utils/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import mosqueRoutes from "./routes/mosqueRoutes.js";
// import Users from "./Models/userModel";
const app = express();
dotenv.config();
const port = process.env.PORT || 5001;
connectdb();

app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.send("api works");
});

app.use("/api/user", userRoutes);
app.use("/api/mosque", mosqueRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
