import mongoose from "mongoose";

const schema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
 userId:{
    type :mongoose.Schema.Types.ObjectId,
    ref: "User" ,
 },
 companyId:{
    type :mongoose.Schema.Types.ObjectId,
    ref: "Company" ,
 }
  
});

export const File = mongoose.model("File", schema); 