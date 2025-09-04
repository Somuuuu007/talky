import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import cors from "cors";

import path from "path";

//yeh taaki read kr sake env file me jo bhi hai
dotenv.config();


const app = express();
const PORT = process.env.PORT

const __dirname = path.resolve();

// not done directly because it will get too messy after wards so instead we will create a folder routes


// app.get("/api/auth/signup", (req, res) => {
//     res.send("Signup route");
// });

// app.get("/api/auth/login", (req, res) => {
//     res.send("Login route");
// });

// app.get("/api/auth/logout", (req, res) => {
//     res.send("Logout route");
// });
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes); // this is what we will write now
//mtlb jb koi /api/auth ko call krega to yeh authRoutes ko call krega aur phir woh ageh wala jo h woh hoga run 
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});