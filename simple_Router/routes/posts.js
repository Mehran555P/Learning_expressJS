const express = require('express')
const router = express.Router()


router.get('/', (req, res) =>{
    console.log("Posts page")
    res.send("Posts list")
})

router.get('/new', (req, res) =>{
    console.log("Create new post")
    res.send("New post")
})


module.exports = router
