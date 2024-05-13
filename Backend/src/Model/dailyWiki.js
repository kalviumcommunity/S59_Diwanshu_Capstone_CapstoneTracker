const mongoose = require("mongoose");

const dailyStandupSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      defualt: Date.now(),
      required: true,
    },
    worklist: {
      type: String,
      required: true
    },
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },

    status: {
      type: String,
      enum: ["To Do", "In Progress", "Done"],
      default: "To Do",
    },
  },
  { versionKey: false }
);

const standUp = mongoose.model("Wiki", dailyStandupSchema);

module.exports = { standUp };
