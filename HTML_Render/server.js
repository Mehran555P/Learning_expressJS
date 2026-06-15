const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log("Hello world")
    res.render('index')
})

const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')

app.use('/users', userRouter)
app.use('/posts', postRouter)

app.listen(3000)