const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//routes
const funcionarioRoute = require('./routes/Funcionario');

const config = require('./config');
const app = express();

mongoose.connect(config.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((response) => {
    console.log('The BD is connected !');
}).catch((err) => {
    console.log(err);
});;

app.use(cors());
app.use(express.json());
app.use(funcionarioRoute);
app.listen(3333, () => console.log('The server is running !'));