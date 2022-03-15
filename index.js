require('dotenv').config();

//cors
const cors = require('cors');
//DB
const { dbConnection } = require('./database/config');
//crear servidor express
const express = require('express');

//crear servidor 
const app = express();

//configurar cors
app.use(cors());

//base de datos
dbConnection();


console.log( process.env );

//sounje
//JdXzCbYwbR1tpAYy

//rutas
app.get('/', (req,res) => {

    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });
});

app.listen(process.env.PORT , () => {
    console.log('servidor corriendo en el puerto ' + process.env.PORT);
});