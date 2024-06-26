const mongoose = require("mongoose");
const { Schema } = mongoose;

const updateSchema = new Schema(
  {
    postedBy: {
      userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
      username: { type: String, required: true },
    },
    artifactLink: {
      type: String,
      required: true,
    },
    videoLink: {
      type: String,
      required: true,
    },
    codiumAI: {
      type: String,
      default: "", 
    },
    actionTakenOnFeedback: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const updateCapstone = (homeworkName) => {
  return mongoose.model(homeworkName, updateSchema);
};

module.exports = { updateCapstone };
