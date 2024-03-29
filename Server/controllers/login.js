require('dotenv').config()
const bcrypt = require('bcrypt');
const { User } = require('../db');
const jwt=require('jsonwebtoken')
async function login(req, res) {
  const { email, password } = req.body;

  try {
    
    const user = await User.findOne({ where: { email } });

    
    if (!user) {
      return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos',access:false });
    }

    
    const passwordMatch = await bcrypt.compare(password, user.password);

    
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos',access:false });
    }

   
    const tasks = await user.getTasks()
    const tokenPayload={
    user
    }
    const token=jwt.sign(tokenPayload,process.env.JWT_SECRET)
    res.cookie("jwt",token)          
    res.status(200).json({ message: 'Inicio de sesión exitoso',user:tokenPayload, access:true })  ;

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
 
module.exports = login
 