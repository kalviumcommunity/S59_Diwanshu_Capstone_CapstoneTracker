const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
  messages: [
    {
      sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
      text: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

const ChatModel = mongoose.model("Discussion", chatSchema);
module.exports = { ChatModel };
