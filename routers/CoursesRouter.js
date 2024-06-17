//const express = require('express');
import express from 'express';
const router = express.Router()


let courses = [
    { id: 1, name: 'Math' },
    { id: 2, name: 'English' },
];

router.use(express.json());//will extract data from body - so we don't ned to register to 'data' and 'end' events
//all server definitions will be here

router.get('/courses', function (req, res) {
    res.json(courses);
});

router.get('/courses/:id', function (req, res) {
    let result = courses.filter(s => s.id == req.params.id)
    if (result.length > 0) {//there is any student with requested id
        res.json(result[0])
    }
    else {
        res.status(404).send('Student not found');
    }
});

router.post('/courses', function (req, res) {
    courses.push(req.body);
    res.json(courses);
});

router.put('/courses/:id', function (req, res) { });

router.delete('/courses/:id', function (req, res) { });

//module.exports = router;
export default router;