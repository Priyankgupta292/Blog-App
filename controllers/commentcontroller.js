const mongoose=require('mongoose');
const Comment=require('../model/commentmodel');
const Post=require('../model/postmodel');

exports.createComment=async (req,res)=>{

    try {
        let {post,body,user}=req.body;
        const comment=new Comment({
            post,body,user
        })
        const savedcomment=await comment.save();

        const updatedPost= await Post.findByIdAndUpdate(post,{$push:{comment:savedcomment._id}},{new:true})
                    .populate('comment')
                    .exec();

        console.log(updatedPost);
        

        res.json({
            post:updatedPost
        })

    } catch (error) {
        
        res.status(400);
        res.json({error});

    }

}
