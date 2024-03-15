const { Task, User } = require('../db');

const getTask = async (req, res) => {
    const { userUuid } = req.body;

    // Validar si se proporciona un uuid de usuario válido
    if (!userUuid || typeof userUuid !== 'string' || userUuid.trim() === '') {
        return res.status(400).json({ message: "Se necesita proporcionar un uuid válido del usuario" });
    }

    try {
        // Buscar al usuario por su UUID
        const user = await User.findOne({ where: { uuid: userUuid } });

        // Verificar si se encontró el usuario
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Obtener todas las tareas asociadas al usuario
        const tasks = await user.getTasks();

        return res.status(200).json({ tasks });
    } catch (error) {
        console.error('Error al obtener tareas:', error);
        return res.status(500).json({ message: "Error del servidor: " + error.message });
    }
};

module.exports = getTask;
