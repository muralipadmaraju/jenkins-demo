const express=requires("express");
const app=express();
const PORT=3000;
app.get("/",(req,res)=>{
    res.send("AP is Working Fine");
})

app.listen(PORT,"0.0.0.0",()=>{
    console.log('SERVER is UP and Running...!')
})