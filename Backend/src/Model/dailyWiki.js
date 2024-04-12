const mongoose = require("mongoose");

const dailyStandupSchema = new mongoose.Schema(
    {
        date: {
            type:Date,
            required : true,
        },
        worklist : {
            type : String,
            required : true,

        },
    },
    {versionKey : false}
);

const standUp = mongoose.model ("Wiki", dailyStandupSchema) ;

module.exports = {standUp}
