const express=require("express")

const app=express()

app.get("/home",(req,res)=>{

res.send(" Hi am running")

})

app.listen(5000,()=>{

console.log("Application Started")

})