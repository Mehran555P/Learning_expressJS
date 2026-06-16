const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('posts', {
        title: "Users page",
        message: "به پروژه اکسپرس و EJS خوش آمدید!",
        features: ["سادگی کدها", "ساختار هدر و فوتر منظم", "بدون پیچیدگی"]
    });
});


router.get('/new', (req, res) => {
    console.log("Create new user")
    res.send("New user")
})


module.exports = router