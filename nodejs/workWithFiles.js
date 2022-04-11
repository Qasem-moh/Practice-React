const express=require('express')
const app=express()



app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('about',(req,res)=>{
    res.send('About')
})




app.listen(5000,()=>{
    console.log('server is running on port 5000')
})