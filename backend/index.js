import express from "express";
import dotenv from "dotenv"
dotenv.config();
const app=express();


app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})

app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(process.env.PORT,()=>{
    console.log("Server Started at",process.env.PORT);
})