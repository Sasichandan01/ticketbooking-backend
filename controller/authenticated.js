const User= require("../model/user_model");

async function getUser(req,res){
    try{
        const userId=req.user.id;
        const user=await User.findById({_id:userId});
        if(!user){
            return res.status(404).json({message:"User not found",success:false});
        }
        res.status(200).json({data:user,success:true});
    }
    catch(error){
        res.status(500).json({ message: "internal Server error", success: false });
    }
}

module.exports=getUser;