const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    console.log("Users page")
    res.send("Users list")
})


router.get('/new', (req, res) => {
    console.log("Create new user")
    res.send("New user")
})


module.exports = router