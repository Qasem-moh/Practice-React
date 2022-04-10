const express = require('express');
let bodyParser = require('body-parser');
const app = express();
bodyParser = bodyParser.urlencoded({extended: true});
app.get('/', (req, res, next) => {
    res.send('<form action="/form" method="post"><input  type="text" name="user" /><input type="submit" value="Submit" /></form>');
});


app.post('/form', bodyParser, (req, res, next) => {
    console.log(req.body.user);
    res.end()
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});