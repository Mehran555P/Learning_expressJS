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
    console.log("Create new user")
    res.send("New user")
})

router.post('/', (req, res) => {
    res.send("Create User")
})


router.get('/:id', (req, res) => {
        res.send(`Get user with ID ${req.params.id}`)
        console.log(req.user)
    })

router.put('/:id', (req, res) => {
    res.send(`Update user with ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Delete user with ID ${req.params.id}`)
})

const users = [{ name: "Meharn"}, { name: "Mahan"}]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router