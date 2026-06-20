const express = require('express')
const app = express()

app.use(logger)

app.get('/', (req, res) => {
    console.log("Home log")
    res.send("Home page")
})

app.get('/users', (req, res) => {
    console.log("Users log")
    res.send("Users page")
})

function logger(req, res, next) {
    console.log("Log")
    next()
}


app.listen(3000)