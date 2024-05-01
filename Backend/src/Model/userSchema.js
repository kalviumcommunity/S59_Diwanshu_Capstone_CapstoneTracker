const mongoose = require("mongoose");
const argon2 = require("argon2");

const { Schema } = mongoose; 

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true, 
  },
 
  oauthId: { type: String },

  streak: {
    type: Number,
    default: 0,
  },
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  discussion: [{ type: Schema.Types.ObjectId, ref: "Discussion" }],
  wiki: [{ type: Schema.Types.ObjectId, ref: "Wiki" }],
  update: [{ type: Schema.Types.ObjectId, ref: "homeworkName" }],
});

UserSchema.index({ username: 1, email: 1 });

UserSchema.methods.setPassword = async function (password) {
  
  try {
    this.password = await argon2.hash(password);
    console.log(this);
  } catch (error) {
    throw new Error("Error hashing password");
  }
};

UserSchema.methods.validatePassword = async function (password) {
  try {
    return await argon2.verify(this.password, password);
  } catch (error) {
    return false;
  }
};

const UserModel = mongoose.model("User", UserSchema);

module.exports = { UserModel };
