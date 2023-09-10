const mongoose=require('mongoose');
const Post=require('../model/postmodel');


exports.createPost=async (req,res)=>{
    try {
        const {title,body}=req.body;
    const post=new Post({
        title,body
    })

    const savedPost=await post.save();
    res.status(200).json({
        "success":savedPost
    })
    } catch (error) {
      res.status(400)
        .json({
            error
        })  
    }

}

exports.getAllPosts=async (req,res)=>{
    try {
        const posts= await Post.find().populate('like').populate('comment').exec();     //populate ka use karne se pura object aa jayega nahi to kewal id ayegi
        res.status(200)
            .json(posts);
    } catch (error) {
        res.status(400)
            .json(error);
        
    }
}