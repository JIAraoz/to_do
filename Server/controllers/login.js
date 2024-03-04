const bcrypt = require('bcrypt');
const { User } = require('../models');

async function login(req, res) {
  const { email, password } = req.body;

  try {
    // Buscar al usuario por su dirección de correo electrónico
    const user = await User.findOne({ where: { email } });

    // Si no se encuentra el usuario, devolver un mensaje de error
    if (!user) {
      return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
    }

    // Verificar la contraseña
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Si la contraseña no coincide, devolver un mensaje de error
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
    }

    // Si la contraseña coincide, iniciar sesión exitosamente
    // Aquí podrías generar un token de sesión o establecer una cookie de sesión, dependiendo de tus necesidades

    return res.status(200).json({ message: 'Inicio de sesión exitoso', user });

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}

module.exports = {
  login,
}