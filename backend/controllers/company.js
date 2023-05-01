import { Company } from "../models/company.js";
import { User } from "../models/user.js";



export const newCom =async (req,res,next)  => {
    try{
        const { name, description, role, pocEmail, branch, timeline, active, appliedUsers } = req.body;
        const user = await User.find({ email: pocEmail });
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

  export const updateCom = async (req,res,next)=>{
    try{
      const company = await Company.findById(req.params.id);
    const { name, description, role, branch, timeline, active, appliedUsers } = req.body;
    if(!name&&!description&&!role&&!branch&&!timeline&&!active&&!appliedUsers){
      res.status(404).json({
        error:"nothing entered",
      })
    }
    if(name){
      company.name=name;
    }
    if(description){
      
      company.description=description;
    }
    if(role){
      company.role=role;
    }
    if(branch){
      company.branch=branch;
    }
    if(timeline){
      company.timeline=timeline;
    }
    if(active){
      company.active=active;
    }
    if(appliedUsers){
      company.appliedUsers=appliedUsers;
    }
    await company.save();
  res.status(200).json({
    sucess:true,
    message:"company updated",
  })
  }
    catch(err){
      next(err);
    }


  };
  

export const deleteCom= async(req,res,next)=>{
  try{
    const company=await Company.findById(req.params.id)
    await company.deleteOne()
    res.status(200).json({
      success:"true",
      message:"company deleted"
    })
  }
  catch(err){
    next(err)
  }
}