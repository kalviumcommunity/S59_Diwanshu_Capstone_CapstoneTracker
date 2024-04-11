const express = require("express");
 const app = express();

const mongoose = require("mongoose");
const cors = require("cors")
const PORT = process.env.PORT || 8080;
const {router} = require("./src/controller/userRoutes");
const { connectDB } = require("./src/connection/db");

connectDB();


 app.use(cors({
    origin : "http://localhost:5173",
    methods : ["GET", "POST",'PUT',"DELETE","PATCH"]
 })
);
 app.use(express.json())
 app.use("/user",router)





mongoose.connection.once("open",()=> {
    app.listen(PORT, () => {
      console.log(`Server is Connected on ${PORT}`);
    });
});
