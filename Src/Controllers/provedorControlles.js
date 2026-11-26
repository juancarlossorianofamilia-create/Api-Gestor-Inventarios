const provedorModels = require('../Models/provedorModels'); // Importar el modelo de proveedores

// Controlador para obtener todos los proveedores
const getTodosProvedores = async (req, res) => {
    
    try {
        const provedor = await provedorModels.getTodosProvedores(); // Llamar a la función del modelo para obtener los proveedores 
        res.status(200).json(provedor); // Enviar la respuesta con los proveedores en formato JSON
    } catch (error) {
        console.error('Error al obtener proveedores:', error);
        res.status(500).json({ error: 'Error al obtener proveedores' }); // Enviar un error si ocurre algún problema
    } finally {
        // Aquí podrías cerrar la conexión si fuera necesario, pero en este caso no es necesario ya que estamos usando un pool de conexiones
       pool.realeaseConnection(); // Liberar la conexión después de usarla
    }
}

// Controlador para obtener un proveedor por su ID
const getPrvedorPorId = async (req, res) => {
    const { Id } = req.params; // Obtener el ID del proveedor desde los parámetros de la solicitud

    try {
        const provedor = await provedorModels.getPrvedorPorId(Id); // Llamar a la función del modelo para obtener el proveedor
        if (provedor) {
            res.status(200).json(provedor); // Enviar la respuesta con el proveedor en formato JSON
        } else {
            res.status(404).json({ error: 'Proveedor no encontrado' }); // Enviar un error si el proveedor no es encontrado
        }
    } catch (error) {
        console.error('Error al obtener proveedor:', error);
        res.status(500).json({ error: 'Error al obtener proveedor' }); // Enviar un error si ocurre algún problema
    }
    finally {
        // Aquí podrías cerrar la conexión si fuera necesario, pero en este caso no es necesario ya que estamos usando un pool de conexiones
        pool.releaseConnection(); // Liberar la conexión después de usarla
    }
}

// Controlador para crear un nuevo proveedor
const crearProvedor = async (req, res) => {
    const provedorData = req.body; // Obtener los datos del proveedor desde el cuerpo de la solicitud

    try {
        const provedorId = await provedorModels.crearProvedor(provedorData); // Llamar a la función del modelo para crear el proveedor
        res.status(201).json({ id: provedorId, ...provedorData }); // Enviar la respuesta con el ID del nuevo proveedor creado
    } catch (error) {
        console.error('Error al crear proveedor:', error);
        res.status(500).json({ error: 'Error al crear proveedor' }); // Enviar un error si ocurre algún problema
    }
    finally {
        // Aquí podrías cerrar la conexión si fuera necesario, pero en este caso no es necesario ya que estamos usando un pool de conexiones
        pool.releaseConnection(); // Liberar la conexión después de usarla
    }   
}

// Controlador para actualizar un proveedor existente
const actualizarProvedor = async (req, res) => {
    const { Id } = req.params;  // Obtener el ID del proveedor desde los parámetros de la solicitud
    const provedorData = req.body; // Obtener los datos actualizados del proveedor desde el cuerpo de la solicitud      
    try {
        const filasAfectadas = await provedorModels.actualizarProvedor(Id, provedorData); // Llamar a la función del modelo para actualizar el proveedor
        if (filasAfectadas > 0) {
            res.status(200).json({ message: 'Proveedor actualizado correctamente' }); // Enviar un mensaje de éxito si se actualizó el proveedor    
        } else {
            res.status(404).json({ error: 'Proveedor no encontrado' }); // Enviar un error si el proveedor no es encontrado
        }
    } catch (error) {
        console.error('Error al actualizar proveedor:', error);
        res.status(500).json({ error: 'Error al actualizar proveedor' }); // Enviar un error si ocurre algún problema
    }
    finally {
        // Aquí podrías cerrar la conexión si fuera necesario, pero en este caso no es necesario ya que estamos usando un pool de conexiones
        pool.releaseConnection(); // Liberar la conexión después de usarla
    }
}

// Controlador para eliminar un proveedor por su ID
const eliminarProvedor = async (req, res) => {
    const { Id } = req.params;  // Obtener el ID del proveedor desde los parámetros de la solicitud
    try {
        const filasAfectadas = await provedorModels.eliminarProvedor(Id); // Llamar a la función del modelo para eliminar el proveedor
        if (filasAfectadas > 0) {
            res.status(200).json({ message: 'Proveedor eliminado correctamente' }); // Enviar un mensaje de éxito si se eliminó el proveedor
        } else {
            res.status(404).json({ error: 'Proveedor no encontrado' }); // Enviar un error si el proveedor no es encontrado
        }
    } catch (error) {
        console.error('Error al eliminar proveedor:', error);
        res.status(500).json({ error: 'Error al eliminar proveedor' }); // Enviar un error si ocurre algún problema
    }
    finally {
        // Aquí podrías cerrar la conexión si fuera necesario, pero en este caso no es necesario ya que estamos usando un pool de conexiones
        pool.releaseConnection(); // Liberar la conexión después de usarla
    }
}

module.exports = {getTodosProvedores, getPrvedorPorId, crearProvedor, actualizarProvedor, eliminarProvedor}; // Exportar los controladores para su uso en las rutas