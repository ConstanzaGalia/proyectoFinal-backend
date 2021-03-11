//Importación de módulos
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

//Aqui van las rutas

//Creando el servidor
const app = express();
app.use(cors());

//Conectar con mongodb
mongoose.Promise = global.Promise;
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.tz7nc.mongodb.net/proyectoFinalRolling?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

//Habilitación express.json y urlencoded
app.use(express.json({ extended: true }));
app.use(express.urlencoded());


//importación de rutas



//puerto y arranque del servidor
app.listen(4000, () => {
  console.log('Servidor Funcionando');
});