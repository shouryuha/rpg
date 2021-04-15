const express = require('express');
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')


//import routes
const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute)
// ROUTES
app.get('/', (req,res) => {
    res.send('We are home')
})

// connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true },
    () =>{ console.log('connect to db!!')}
)

app.listen(3000)