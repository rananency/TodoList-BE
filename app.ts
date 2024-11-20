const express = require("express");
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;
console.log(process.env)
const app = express();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});