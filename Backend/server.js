const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const {router} = require("./src/controller/route");


 const app = express()
 app.use(cors({
    origin : "http://localhost:5173",
    methods : ["GET", "POST",'PUT',"DELETE","PATCH"]
 })
);
 app.use(express.json())
 app.use("/",router)



const PORT = process.env.PORT || 8080

mongoose.connection.once("open",()=> {
    app.listen(PORT, () => {
      console.log(`Server is Connected on ${PORT}`);
    });
});
