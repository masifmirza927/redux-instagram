const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRouter = require("./routes/UserRoutes");
// Load environment variables from a .env file
dotenv.config();
app.use(cors());
app.use(express.json());


// routes
app.use("/user", userRouter);






app.get("/", (req, res) => res.send("application is working"));

const startServer = async () => {
    try {
        mongoose.connect("mongodb://localhost:27017/redux-instagram").then(() => {
            // mongoose.connect(process.env.MONGODB_URI).then(() => {
            app.listen(process.env.PORT, () => {
                console.log(`server is listening on port ${process.env.PORT}`);
            })
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();