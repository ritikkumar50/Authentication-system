import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 3000;
connectDB().catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
});

app.use(express.json());
app.use(cors({ credentials: true }));
app.use(cookieParser());

//API endpoints
app.get("/", (req, res) => {
    res.send("Hello World! I am ritik ");
});

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});