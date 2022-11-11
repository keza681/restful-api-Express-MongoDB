const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

// IMPORT ROUTES
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION).then(() => {
    console.log('connected to DB')
    app.listen(3000);
})


// How do we start listening to the server 
