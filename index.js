//Importación de módulos
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const port = Process.env.PORT || 4000 ;

//Aqui van las rutas
const routeUsers = require('./routes/users');
const routeAuth = require('./routes/auth');
const routeProducts = require('./routes/products');
const routeMensajes = require('./routes/mensajes');


//Creando el servidor
const app = express();
app.use(cors());
app.use(morgan('tiny'));

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
app.use(express.json({ limit:'50mb', extended: true }));
app.use(express.urlencoded());


//importación de rutas
app.use('/api/usuarios', routeUsers);
app.use('/api/auth', routeAuth);
app.use('/api/products', routeProducts);
app.use('/api/mensajes', routeMensajes);


//puerto y arranque del servidor
app.listen(port, () => {
  console.log('Servidor Funcionando');
});