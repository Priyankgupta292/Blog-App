const mongoose=require('mongoose');
require('dotenv').config();
const DBURL=process.env.DBURL;
const connectWithDb = ()=>{
    mongoose.connect(DBURL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("DB connected successfully"))
    .catch((err)=>{
        console.log("error occured in connection with DB");
        console.log(err);
        process.exit(1);
        
    })
    
    
}

module.exports=connectWithDb;