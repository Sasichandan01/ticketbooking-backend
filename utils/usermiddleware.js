const jwt=require("jsonwebtoken")
const secretkey=process.env.JWT_SECRET;

function authenticateToken(req,res,next){
 
    const autHeader=req.header("Authorization")
   
    if(!autHeader){
        return res.status(401).json({message:"Unauthorized missing token",success:false});
    }
    const [bearer, token]= autHeader.split(" ");
   
    if(bearer!=="Bearer" || !token){
        return res
          .status(401)
          .json({
            message: "Unauthorized: Invalid missing token",
            success: false,
          });
    }
    jwt.verify(token,secretkey,(err,user)=>{
        console.log()
        if(err){
            return res.status(403).json({ message: err, success: false });
        }
        req.user=user;
        next();
    })
}
module.exports=authenticateToken