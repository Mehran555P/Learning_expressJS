const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('users', {
        title: "Users page",
        message: "به پروژه اکسپرس و EJS خوش آمدید!",
        features: ["سادگی کدها", "ساختار هدر و فوتر منظم", "بدون پیچیدگی"]
    });
});


router.get('/new', (req, res) => {
    res.render('users/new')
})

router.post('/', (req, res) => {
    console.log(req.body.firstName)
    res.send("Here")
})


router.get('/:id', (req, res) => {
        res.send(`Get user with ID ${req.params.id}`)
    })

router.put('/:id', (req, res) => {
    res.send(`Update user with ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Delete user with ID ${req.params.id}`)
})

module.exports = router