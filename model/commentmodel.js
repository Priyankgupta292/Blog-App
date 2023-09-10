const mongoose=require('mongoose');
const Post=require('./postmodel');

// schema

const commentSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    body:{
        type:String,
        require:true
    },
    user:{
        type:String,
        require:true
    }
})

// export Schema
module.exports=mongoose.model("Comment",commentSchema);