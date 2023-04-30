import { Company } from "../models/company.js";
import { User } from "../models/user.js";



export const newCom =async (req,res,next)  => {
    try{
        const { name, description, role, email, branch, timeline, active, appliedUsers } = req.body;
        const user = await User.find({ email: email });
        const { _id } = user[0];
        const company = await Company.create({ name, description, role, poc: _id, branch, timeline, active, appliedUsers });
        // console.log(company);
        res.status(200).json({
            success:true,
            message:"Company added successfully"
        })
    }
    catch(error){
        console.log(error);
        next(error);
    }
};

export const getCom= async(req,res,next) =>{
    try{
        const companies=await Company.find();
        // console.log(companies);
        res.status(200).json({
            companies
        })
    }
    catch(error){
        console.log(error)
        next(error)
    }
}

export const applyComUser = async (req, res, next) => {
    try {
      const company = await Company.findById(req.params.id);
  
      if (!company) return next(new ErrorHandler("Task not found", 404));
  
    //   console.log(req.user._id);
      company.appliedUsers.push(req.user._id);
      await company.save();
  
      res.status(200).json({
        success: true,
        message: "Task Updated!",
      });
    } catch (error) {
      next(error);
    }
  };
  

