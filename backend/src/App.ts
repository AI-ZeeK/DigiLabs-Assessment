dotenv.config();
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
const color = colors;
import connectDB from "./config/db.js";
const app = express();
connectDB();
import router from "./routes/AppRoute.js";

const PORT = process.env.PORT || 5000;
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use("/app", router);

app.listen(PORT, () =>
	console.log(`Server Running on http://localhost:${PORT}`.magenta.underline)
);
