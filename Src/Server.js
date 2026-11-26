const express = require('express'); // Importar el módulo Express para crear la aplicación web
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env
//const {pool, getConnection} = require('./Config/bdInventario');
const provedorRoutes = require('./Routes/provedorRoutes'); // Importar las rutas de proveedores

const App = require('express')(); // Crear una instancia de la aplicación Express
App.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes como JSON

App.use('/provedores', provedorRoutes); // Usar las rutas de proveedores en la aplicación



//const testConnection = async () => {
    //const conexion = getConnection();
    //console.log('Conexión a la base de datos establecida desde Server.js');
    //return conexion
//}

//testConnection()


App.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});