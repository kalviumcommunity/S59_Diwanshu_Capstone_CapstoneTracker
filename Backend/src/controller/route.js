require("dotenv").config();

const express = require("express");
const router = express.Router();

const { UserModel } = require("../Model/userSchema");
const {updateHomework} = require("../validation/userJoiSchemas");
const {contactSchema} = require("../validation/userJoiSchemas");
const {updateCapstone} = require("../Model/updateSchema");
const {validateData} = require("../validation/validator");

router.post("/contact" , async (req,res)=> {
    try{
        const {email,fullname,message}= req.body;
        const {error} = validateData(
            {email,fullname,message}, contactSchema
        );
        if(error){
            console.log(error);
            return res.status.apply(400).json({message: error.details});
            }

            res.status(200).json({message : "Contact form submitted Successfully"});
    }
    catch(error){
      console.error(error);
      res.status(500).json({message : "Internal Server Error"});
    }
})

router.post("/updateCapstone" ,async(req,res) => {
    try{
        const { artifactLink, videoLink, codiumAI, actionTakenonFeedback } =
          req.body;
        const { error } = validateData(
          { artifactLink, videoLink, codiumAI, actionTakenonFeedback },
          updateHomework
        );

        if(error){
            console.log(error);
            return res.status(400).json({message : error.details});
        }

        const newHomeworkUpdate = new updateCapstone({
          artifactLink,
          videoLink,
          codiumAI,
          actionTakenonFeedback,
        });
        
        await newHomeworkUpdate.save();
        res.status(200).json({message : "Homework Updated Successfully."})

    }
    catch(error){
        console.error(error);
        res.status(500).json({message : "Internal Server Error"});
    }
})

router.get("/progress" , async (req,res)=> {
    try{
      const streakData = await Streak.find();
        
      res.status(200).json({streakData});
    }
    catch(error){
        console.error("Error Fetching Progress Data");
        res.status(500).json({message : "Internal Server Error."});
    }
})

 