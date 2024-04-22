const mongoose = require("mongoose")

const updateSchema = new mongoose.Schema(
   {
      artifactLink : {
         type:String,
         required: true
      },
      videoLink : {
         type: String,
         required: true,
      },
      codiumAI : {
         type: String,   
      },
      actionTakenonFeedback : {
         type:String,
         required:true,
      }

   },
   {versionKey: false }
      );

   const updateCapstone = (homeworkName) => {
      return mongoose.model(homeworkName, updateSchema);
   };

   module.exports = {updateCapstone}