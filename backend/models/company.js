import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    
  },
  role:{
    type: String,
    required: true,
  },
  poc: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    
  },
  active:{
    required: true,
    type: Boolean,
    default:false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Company = mongoose.model("Company", schema);