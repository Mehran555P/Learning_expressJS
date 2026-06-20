const express = require('express')
const app = express()

app.use(logger)

app.get('/', (req, res) => {
    console.log("Home log")
    res.send("Home page")
})

app.get('/users', auth, (req, res) => {
    console.log("Users log")
    res.send("Users page")
})

function logger(req, res, next) {
    console.log("Log")
    next()
}

function auth(req, res, next) {
    if (req.query.admin === "true") {
        console.log("User is admin")
        next()
    }
    else {
        console.log("No auth")
        res.send("No auth")
    }
}


app.listen(3000)