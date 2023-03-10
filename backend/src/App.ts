import express from "express";
import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
import cors from "cors";
const color = colors;
import connectDB from "./config/db.js";
const app = express();
connectDB();
import router from "./routes/AppRoute.js";
import App from "./models/Model.js";

const PORT = process.env.PORT || 5000;
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use("/app", router);
app.get("/", async (req, res) => {
	const trackNumber = await App.find();
	res.status(200).json(trackNumber);
});

app.listen(PORT, () =>
	console.log(`Server Running on http://localhost:${PORT}`.magenta.underline)
);
