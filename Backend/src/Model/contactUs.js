const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema (
    {
        email : {
            type : String,
            required : true,

        },
        fullname : {
            type : String,
            required: true,
        },
        message : {
            type : String,
            required : true,
        },
    },
    {versionKey: false}
);

const Contact = mongoose.model("contact", contactSchema);
module.exports = {Contact} ;
