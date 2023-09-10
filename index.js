const express=require('express');



// extract port number from .env file
require('dotenv').config();
const PORT=process.env.PORT;

const app=express();




// middleware setup
app.use(express.json());




// route import
const blog=require('./routes/blog');




// mount route
app.use('/api/v1',blog);





// db connect

const connectWithDb=require('./config/database');
connectWithDb();




// default response
app.get('/',(req,res)=>{
    res.send("<h1>Welcome To The Home Page</h1>");
})




// start server
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
    
})




