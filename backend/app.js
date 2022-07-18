const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoute');
const authRoute = require('./routes/authRoute');
const orderRoute = require('./routes/orderRoute');
const cors = require('cors');


const app = express();
app.use(cors());

//connect mongodb
mongoose.connect('mongodb://localhost/readytrade-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Routes
app.use('/product', productRoute);
app.use('/auth', authRoute);
app.use('/order', orderRoute);

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port} `)
})