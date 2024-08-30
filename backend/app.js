const express = require("express");
const cors = require('cors');
// const userRoute = require('./routes/userRoute')
const reviewRoue = require('./route/review');
const app = express();


// Middleware

app.use(cors());
app.use(express.json());



//Mounting routes
app.use('/review',reviewRoue);

app.use((req, res, next) => {
    console.log('Hello from Middleware ');
    next();
});


module.exports = app; 