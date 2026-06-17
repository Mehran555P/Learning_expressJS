const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: "Home page",
        message: "به پروژه اکسپرس و EJS خوش آمدید!",
        features: ["سادگی کدها", "ساختار هدر و فوتر منظم", "بدون پیچیدگی"]
    });
});

const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')

app.use('/users', userRouter)
app.use('/posts', postRouter)

app.listen(3000)