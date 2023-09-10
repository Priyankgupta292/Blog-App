const mongoose=require('mongoose');
const Post=require('./postmodel');


const Likeschema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }
    ,
    user:{
        type:String,
        require:true
    }
})


// export scheme

module.exports=mongoose.model("Like",Likeschema);
