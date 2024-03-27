require('dotenv').config
const {Router}=require('express')
const jwt=require('jsonwebtoken')
const register=require('../controllers/register')
const login=require('../controllers/login')
const getTask=require('../controllers/getTask')
const router=Router()
const postTask=require('../controllers/postTask')
const server = require('../server')


router.post('/register',register)

router.post('/login',login)
router.use(async (req,res,next)=>{
    try {
    const token=req.cookies.jwt
    jwt.verify(token,process.env.JWT_SECRET)
    console.log(token);
    next()
    } catch (error) {
        res.status(401).json({message:"token invalido"})
    }

})
router.get('/task/:userUuid',getTask) 

router.post('/post',postTask)

 
module.exports=router  