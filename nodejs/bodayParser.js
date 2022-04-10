const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/', (req, res,next) => {
    res.send('<form action="/form" method="post"><input  type="text" name="user" /><input type="submit" value="Submit" /></form>');
});


app.post('/form', (req, res,next) => {
    // res.send('<h1>Hello ' + req.body.user + '</h1>');
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});