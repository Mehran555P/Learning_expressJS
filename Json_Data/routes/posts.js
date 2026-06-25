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

router.post('/', (req, res) => {
    res.send("Create a post")
})


router.get('/:id', (req, res) => {
        res.send(`Get post with ID ${req.params.id}`)
    })

router.put('/:id', (req, res) => {
    res.send(`Update post with ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Delete post with ID ${req.params.id}`)
})


module.exports = router
