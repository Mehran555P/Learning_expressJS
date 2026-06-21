const express = require('express')
const app = express()

app.use(logger)

app.get('/', (req, res) => {
    console.log("Home log")
    res.send("Home page")
})

app.get('/users', auth, (req, res) => {
    console.log(`User is admin = ${req.admin}`)
    console.log("Users log")
    res.send("Users page")
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

function auth(req, res, next) {
    if (req.query.admin === "true") {
        req.admin = true
        next()
    }
    else {
        console.log("No auth")
        res.send("No auth")
    }
}


app.listen(3000)