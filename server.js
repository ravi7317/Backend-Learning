const express = require('express')

const app = express()   //create server instance
app.get("/" , (req,res) =>{ 
    res.send("hello word")
}) 

app.get("/about", (req,res)=>{
    res.send("About Page")
})

app.listen(3000, ()=>{  //app.listen server start krta hai
    console.log('Server is running on port 3000')
})