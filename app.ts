import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/databaseConnection";
import authRoutes from "./src/routes/autheticationRoute";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
