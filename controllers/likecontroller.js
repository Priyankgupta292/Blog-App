const mongoose=require('mongoose');
const Like=require('../model/likemodel');
const Post=require('../model/postmodel');

exports.likePost= async (req,res)=>{
    try {
        const {post,user}=req.body;
        const like=new Like({
            post,user
        });

        const savedLike= await like.save();

        const updatedPost= await Post.findByIdAndUpdate(post,{$push:{like:savedLike._id}},{new:true})
                                    .populate('like')
                                    .exec();

        res.status(200).json({
            "Liked successfully":updatedPost
        })


    } catch (error) {

        res.status(400).json(error);
    }
}

exports.unlikePost=async (req,res)=>{
    try {
        const{post,like}=req.body;

        const deletedLike= await Like.findOneAndDelete({post:post,_id:like});

        const updatedPost= await Post.findByIdAndUpdate(post,{$pull:{like:like}},{new:true});

        res.status(200).json({"sucess":updatedPost});

    } catch (error) {
        res.status(200).json({error});
    }
}