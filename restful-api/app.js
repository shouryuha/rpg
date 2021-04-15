const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config')
//middlewares 
app.use('/posts', () =>{
    console.log('This is a middleware running')
})
//import Routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)
// Routes
app.get('/', (req,res) => {
    res.send('We are on Home')
})


//database
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, () => {
    console.log('connect to fafadb')
})
//How do we start listening to the server

app.listen(3000)