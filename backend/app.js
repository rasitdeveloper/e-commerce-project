const express = require('express');
const mongoose = require('mongoose');

const app = express();

//connect mongodb
mongoose.connect('mongodb://localhost/readytrade-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port} `)
})