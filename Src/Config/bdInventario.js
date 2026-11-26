//
const mySql = require('mysql2/promise');
//require('dotenv').config(); // Cargar variables de entorno desde el archivo .env

// Configuración de la conexión a la base de datos utilizando un pool de conexiones
const pool = mySql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true, // Espera a que haya conexiones disponibles antes de rechazar nuevas solicitudes
    connectionLimit: 10, // Número máximo de conexiones simultáneas en el pool
    queueLimit: 0 // Número máximo de solicitudes en espera (0 significa sin límite)
});

const getConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Conexión a la base de datos establecida con Inventario_db');
        connection.release(); // Liberar la conexión después de usarla
        return connection;
    } catch (error) {
        console.error('Error al obtener conexión:', error);
        throw error;
    }
};

module.exports = { pool, getConnection }; // Exportar el pool y la función getConnection para su uso en otros módulos

