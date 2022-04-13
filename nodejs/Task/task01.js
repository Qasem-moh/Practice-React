const express = require('express');
const app = express();

var student = [
    {id: 0, firstName: 'Qasem', lastName: 'mohammad', speciality: 'programmer'},
    {id: 1, firstName: 'Ahmad', lastName: 'khaled', speciality: 'coder'},
    {id: 2, firstName: 'Ali', lastName: 'sulmain', speciality: 'Designer'},
    {id: 3, firstName: 'Mhmoud', lastName: 'Hasan', speciality: 'programmer'},
    {id: 4, firstName: 'Naser', lastName: 'malek', speciality: 'Writer'},
    {id: 5, firstName: 'muman', lastName: 'tareq', speciality: 'Enginner'},
    {id: 6, firstName: 'mohamed', lastName: 'mohamed', speciality: 'programmer'},

]

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/student', (req, res) => {
    res.send(student);
});

app.listen(5000, () => {
    console.log("server is running on port 5000");
});