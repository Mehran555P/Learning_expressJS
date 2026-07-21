const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    console.log("users page log");
    res.send("users page");
})


module.exports = router;