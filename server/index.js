import express from "express";
import cors from "cors";
import connectdb from "./utils/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
// import Users from "./Models/userModel";
const app = express();
const port = 4000;
dotenv.config();
connectdb();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("api works");
});

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
