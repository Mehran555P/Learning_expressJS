const express = require('express');
const app = express();


app.get('/', (req, res) => {
    console.log("home page log");
    res.send("home page");
})

const usersController = require('./src/users/usersController');

app.use('/users', usersController);

app.listen(3000);