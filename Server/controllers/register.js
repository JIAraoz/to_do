 const bcrypt=require('bcrypt')
const {User}=require('../db')
const register= async (req,res)=>{
    const {username,password,email}=req.body
    try {
        
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
          return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
        }
    
        // Hashing de la contraseña 
        const hashedPassword = await bcrypt.hash(password, 10);
    
        
        const newUser = await User.create({ username, email, password: hashedPassword });
    
        
        return res.status(201).json({ message: 'Usuario registrado correctamente', user: newUser });
    
      } catch (error) {
        console.error('Error al registrar usuario:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
      }
    }
    
    module.exports = register
    
