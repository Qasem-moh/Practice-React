const express=require('express')

const app=express()

app.get('/',(req,res,nexr)=>{
    res.send("Welcome in page home")
})

app.get('/about',(req,res,nexr)=>{
    res.send('id: '+req.query.id+'<br/>' +'name: '+req.query.name)
})
// app.get('/about',(req,res,nexr)=>{
//     res.send("Welcome in page about")
// })
// app.get('/profile/:name',(req,res,next)=>{
//     // res
//     res.send(req.params.name)
// })
//


app.listen(5000,()=>{
    console.log(`Server is running on port 5000`)
})