const  express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.get('/',(req,res)=>{
    res.send('<form action="/form" method="post"><input type="text" name="user"><button type="submit" ">send</button></form>');
});

app.post('/form',(req,res,next)=>{
    res.send(req.body);

    const startUsage=process.cpuUsage()
    const now=Date.now();
    while(Date.now()-now<500);

    console.log(process.cpuUsage(startUsage));
});


app.listen(5000,()=>{
    console.log("server is running on port 5000");
});