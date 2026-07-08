const express = require("express");

const app=express();

const PORT = 5000;

app.use(express.json());
 
//API

app.get('/' , (req,res)=> {
    res.send("Backend Server Running Successfully wow ...")
});

app.listen(PORT,()=>{
    console.log((`Server is running on port : ${PORT}`));
})