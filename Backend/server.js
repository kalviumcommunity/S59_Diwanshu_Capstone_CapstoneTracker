require("dotenv").config();
require("./src/auth/localStrategy") ;
require("./src/auth/JwtStrategy");


const express = require("express");
const http = require("http");
const passport = require("./src/auth")

const cors = require("cors");
 const app = express();

 app.use(passport.initialize());
 app.use(passport.session());

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


app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
); 
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/", 
    failureRedirect: "/login", 
  })
);


mongoose.connection.once("open",()=> {
    app.listen(PORT, () => {
      console.log(`Server is Connected on ${PORT}`);
    });
});
