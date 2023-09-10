const express=require('express');
const router=express.Router();


// import controllers

const {createPost,getAllPosts}=require('../controllers/postcontroller');
const {likePost,unlikePost}=require('../controllers/likecontroller');
const {createComment}=require('../controllers/commentcontroller');

// routing
router.post('/posts/create',createPost);
router.post('/Likes/like',likePost);
router.delete('/Likes/unlike',unlikePost);
router.post('/comments/create',createComment);
router.get('/posts/getAllPosts',getAllPosts);

module.exports=router;