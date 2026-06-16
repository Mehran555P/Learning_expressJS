const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('posts', {
        title: "Posts page",
        message: "به پروژه اکسپرس و EJS خوش آمدید!",
        features: ["سادگی کدها", "ساختار هدر و فوتر منظم", "بدون پیچیدگی"]
    });
});

router.get('/new', (req, res) =>{
    console.log("Create new post")
    res.send("New post")
})


module.exports = router
