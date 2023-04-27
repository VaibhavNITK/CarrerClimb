import { Company } from "../models/company.js";
import { User } from "../models/user.js";



export const newCom =async (req,res,next)  => {
    try{
        
        const {name,description,role,email,active}=req.body;
        console.log(email)
        const user= await User.find({email:email})
        console.log(user[0]);
        // if(!user) return next(new ErrorHandler("POC not found",400));
        const {_id,branch} = user[0];
        
        console.log(_id)
        const company=await Company.create({name,description,role,poc:_id,active});
        // sendCookie(company,res,"Company added successfully",201);
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
        console.log(companies);
        res.status(200).json({
            companies
        })
    }
    catch(error){
        console.log(error)
        next(error)
    }
}

