require("dotenv").config();

const express = require("express");
const router = express.Router()

const jwt = require("jsonwebtoken");
const {updateSchema,userJoiSchema} = require("../validation/userJoiSchemas");
const {validateData} = require("../validation/validator");




router.post("/register" , async (req,res) => {
    try{
        const {username,fullname,email,password} = req.body ;

        const {error} = validateData(
            {username,fullname,email,password},
            userJoiSchema
        );

        if(error) {
            console.log(error) ;
            return res.status(400).json({message : error.details});          
        }
        const existingEmail = await UserModel.exists({email});
        if(existingEmail){
            return res.status(400).json({message : "Email is already registered"});
       }

       const newUser = new UserModel ({
        username,
        fullname,
        email,
       });

       await newUser.setPassword(password);
       const savedUser = await newUser.save();
       res.status.apply(201).json(savedUser);
    } catch(error) {
        console.error("Error registering user :" error) ;
        res.status(500).json({message : "Internal Server Error"});
   }
});

// router.post("/login", 
// (req,res) => {

// },
// );