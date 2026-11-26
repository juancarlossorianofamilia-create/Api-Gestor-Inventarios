const {pool} = require('../Config/bdInventario'); // Importar el pool de conexiones desde bdInventario.js

// Función para obtener todos los proveedores
const getTodosProvedores = async () => {
    const [provedores] = await pool.query('SELECT * FROM provedores');
    return provedores;
}

// Función para obtener un proveedor por su ID
const getPrvedorPorId = async (Id) => {
    const [provedor] = await pool.query('SELECT * FROM provedores WHERE Id = ?', [Id]);
    return provedor[0];
}

// Función para crear un nuevo proveedor
const crearProvedor = async (provedorData) => {
    const { Nombre, Direccion, Telefono} = provedorData;
    const [resultado] = await pool.query('INSERT INTO provedores (Nombre, Direccion, Telefono) VALUES (?, ?, ?)', [Nombre, Direccion, Telefono]);
    return resultado.insertId; // Retornar el ID del nuevo proveedor creado
}

// Función para actualizar un proveedor existente
const actualizarProvedor = async (Id, provedorData) => {
    const { Nombre, Direccion, Telefono } = provedorData;
    const [resultado] = await pool.query('UPDATE provedores SET Nombre = ?, Direccion = ?, Telefono = ? WHERE Id = ?', [Nombre, Direccion, Telefono, Id]);
    return resultado.affectedRows; // Retornar el número de filas afectadas
}

// Función para eliminar un proveedor por su ID
const eliminarProvedor = async (Id) => {
    const [resultado] = await pool.query('DELETE FROM provedores WHERE Id = ?', [Id]);
    return resultado.affectedRows; // Retornar el número de filas afectadas
}

// Exportar las funciones para su uso en otros módulos
module.exports = {
    getTodosProvedores,
    getPrvedorPorId,
    crearProvedor,
    actualizarProvedor,
    eliminarProvedor
};