const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("home page log");
    res.send("home page");
})

app.get('/users', (req, res) => {
    console.log("users page log");
    res.send("users page");
})

app.listen(3000);