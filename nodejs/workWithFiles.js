const express=require('express')
const app=express()
const path=require('path')

app.use(express.static(path.join(__dirname,'assets')))
app.use(express.static(path.join(__dirname,'js')))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.ejs'))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','about.html'))
})





app.listen(5000,()=>{
    console.log('server is running on port 5000')
})