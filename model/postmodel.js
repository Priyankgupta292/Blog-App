const mongoose=require('mongoose');
const Like=require('./likemodel');
const Comment=require('./commentmodel');

const postSchema= new mongoose.Schema({
    title:{
        type:String,
        require:true
    }
    ,body:{
        type:String,
        require:true
    },
    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }],
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
    
})

module.exports=mongoose.model("Post",postSchema);   