const express = require('express');
const app = express();

var student = [{id: 0, firstName: 'Qasem', lastName: 'mohammad', speciality: 'programmer'}, {
    id: 1,
    firstName: 'Ahmad',
    lastName: 'khaled',
    speciality: 'coder'
}, {id: 2, firstName: 'Ali', lastName: 'sulmain', speciality: 'Designer'}, {
    id: 3,
    firstName: 'Mhmoud',
    lastName: 'Hasan',
    speciality: 'programmer'
}, {id: 4, firstName: 'Naser', lastName: 'malek', speciality: 'Writer'}, {
    id: 5,
    firstName: 'muman',
    lastName: 'tareq',
    speciality: 'Enginner'
}, {id: 6, firstName: 'mohamed', lastName: 'mohamed', speciality: 'programmer'},

]

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/student', (req, res) => {
    res.send(student);
});

app.get('/student/:id', (req, res) => {
    let user_id = req.params.id
    let newStudent = student.filter(student => student.id == user_id)
    if (newStudent) {
        res.send(newStudent)
    } else {
        res.send('sorry id not found')
    }

});

app.get('/student/delete/:id', (req, res) => {
    let delStudent = student.filter(student => student.id == req.params.id)
    let positionStudent = student.indexOf(delStudent[0])
    student.splice(positionStudent, 1)
    res.send(student)
});


app.listen(5000, () => {
    console.log("server is running on port 5000");
});