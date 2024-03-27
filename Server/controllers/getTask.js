const { Task, User } = require('../db');

const getTask = async (req, res) => {
    const { userUuid } = req.params;

    
    if (!userUuid || typeof userUuid !== 'string' || userUuid.trim() === '') {
        return res.status(400).json({ message: "Se necesita proporcionar un uuid válido del usuario" });
    }

    try {
        
        const user = await User.findOne({ where: { uuid: userUuid } });

        
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        
        const tasks = await user.getTasks();

        return res.status(200).json({ tasks });
    } catch (error) {
        console.error('Error al obtener tareas:', error);
        return res.status(500).json({ message: "Error del servidor: " + error.message });
    }
};

module.exports = getTask;
