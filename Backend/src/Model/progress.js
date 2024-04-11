const mongoose = require("mongoose");

const streakSchema = new mongoose.Schema(
    {
        fullname : {
            type : String,
            required : true,
        },
        streak : {
            type: Number,
            required: true,
        }
    },
    {versionKey: false} 
);

const Streak = mongoose.model("Progress", streakSchema) ;
 module.exports = {Streak} ;