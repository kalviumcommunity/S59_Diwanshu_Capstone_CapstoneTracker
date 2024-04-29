require("dotenv").config();

const express = require("express");
const router = express.Router();
const passport = require("passport") ;

const { UserModel } = require("../Model/userSchema");
const {updateHomework} = require("../validation/userJoiSchemas");
const {contactSchema} = require("../validation/userJoiSchemas");
const {updateCapstone} = require("../Model/updateSchema");
const {validateData} = require("../validation/validator");

router.post("/contact" ,
passport.authenticate("jwt", {session : false}),
 async (req,res)=> {
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

router.post("/updateCapstone" ,
passport.authenticate("jwt", {session : false}),
async(req,res) => {

    try{
        const user = await UserModel.findById(req.user.id);
        if(!user){
          return res.status(404).json({message : "User not found"});
        }
        const { artifactLink, videoLink, codiumAI, actionTakenonFeedback } =
          req.body;

        const { error } = validateData(
          { artifactLink, videoLink, codiumAI, actionTakenonFeedback },
          updateHomework
        );

        if(error){
            console.log(error);
            return res.status(422).json({message : error.details});
        }

        const newHomeworkUpdate = new updateCapstone({
          postedBy : {userId : user._id, username : user.username},
          artifactLink,
          videoLink,
          codiumAI,
          actionTakenonFeedback,
        });
        
        const savedHomework = await newHomeworkUpdate.save();

        user.update.push(savedHomework._id);
         await user.save()

        res.status(201).json({message : "Homework Updated Successfully."})


    }
    catch(error){
        console.error(error);
        res.status(500).json({message : "Internal Server Error"});
    }
});

router.get("/progress" ,
passport.authenticate("jwt", {session : false}),
 async (req,res)=> {
    try{
      const streakData = await Streak.find();
        
      res.status(200).json({streakData});
    }
    catch(error){
        console.error("Error Fetching Progress Data");
        res.status(500).json({message : "Internal Server Error."});
    }
})

 module.exports = router ;