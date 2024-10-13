const jwt=require('jsonwebtoken');
const secretkey=process.env.JWT_SECRET;

function generateToken(user){
    const payload={
        id:user.id,
        email:user.email
    };
    return jwt.sign(payload,secretkey,{expiresIn:"1m"});
}

function generateRefreshToken(user){
    const payload={
        id:user.id,
        email:user.email
    };
    return jwt.sign(payload,secretkey,{expiresIn:"1m"});
}

function verifyToken(token){
    return jwt.verify(token,secretkey);
}

module.exports={generateRefreshToken,generateToken,verifyToken};