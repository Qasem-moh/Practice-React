const express=require('express')
const app=express()
const path=require('path')


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})

app.get('about',(req,res)=>{
    res.send('About')
})




app.listen(5000,()=>{
    console.log('server is running on port 5000')
})