const mongoose = require('mongoose');
//const URI = process.env.local_db;
 const URI = process.env.MONGODB_URI;
const connectDb=async()=>{
    try{
        await mongoose.connect(URI);
        console.log("connection succesfull to db");
    }
    catch(error){
        console.error(error);
        process.exit(0);
    }
}

module.exports=connectDb;
