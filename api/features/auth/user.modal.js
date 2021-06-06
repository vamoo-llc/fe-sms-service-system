import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    resetLink: {
      type: String,
      default: ''
    },
   
  },
  
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);


export default User;
