const express=require("express")

const app=express()

app.get("/home",(req,res)=>{

res.send(" Hi am running")

})

app.listen(process.env.PORT||8000,()=>{

console.log("Application Started")

})