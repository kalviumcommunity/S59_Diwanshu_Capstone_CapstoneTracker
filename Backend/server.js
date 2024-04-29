require("dotenv").config();
require("./src/auth/localStrategy") ;
require("./src/auth/JwtStrategy");


const express = require("express");
const http = require("http") ;
const cors = require("cors");
 const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const userRouter = require("./src/controller/userRoutes");
const viewRouter = require("./src/controller/route");

const { connectDB } = require("./src/connection/db");

connectDB();


 app.use(cors({
    origin : "http://localhost:5173",
    methods : ["GET", "POST",'PUT',"DELETE","PATCH"]
 })
);
 app.use(express.json())
 app.use("/user",userRouter)
 app.use("/view", viewRouter) 





mongoose.connection.once("open",()=> {
    app.listen(PORT, () => {
      console.log(`Server is Connected on ${PORT}`);
    });
});
