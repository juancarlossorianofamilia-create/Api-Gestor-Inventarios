const provedorController = require('../Controllers/provedorControlles'); // Importar el controlador de proveedores
const express = require('express'); // Importar el módulo Express para crear rutas
const router = express.Router(); // Crear un enrutador de Express

// Definir las rutas para los proveedores y asociarlas con las funciones del controlador
router.get('/', provedorController.getTodosProvedores); // Definir la ruta para obtener todos los proveedores
router.get('/:Id', provedorController.getPrvedorPorId); // Definir la ruta para obtener un proveedor por su ID
router.post('/', provedorController.crearProvedor); // Definir la ruta para crear un nuevo proveedor
router.put('/:Id', provedorController.actualizarProvedor); // Definir la ruta para actualizar un proveedor existente
router.delete('/:Id', provedorController.eliminarProvedor); // Definir la ruta para eliminar un proveedor por su ID 


module.exports = router; // Exportar el enrutador para su uso en la aplicación principal