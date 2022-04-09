const express = require('express');
const app = express();

app.all('/', (req, res, next) => {
    res.send('Hello World');
    next();
});
app.all('/about', (req, res) => {
    res.send('About');
});
app.listen(5000, () => {
    console.log('server is running on port 5000');
});