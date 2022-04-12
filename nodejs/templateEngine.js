const express=require('express')
const path=require('path')
const app=express()

app.set('view engine', 'ejs')
app.set('views','views')
app.use(express.static(path.join(__dirname,'assets')))

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'index.ejs'))
    res.render('index',{name:'Nguyen Van A'})
})




app.listen(5000,()=>{
    console.log('server is running on port 5000')
})