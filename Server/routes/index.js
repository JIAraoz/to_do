const {Router}=require('express')
const register=require('../controllers/register')
const login=require('../controllers/login')
const getTask=require('../controllers/getTask')
const postTask=require('../controllers/postTask')
const router=Router()

 router.get("/",(req,res)=>{
    res.send("hola")
 })
router.post('/register',register
)
router.post('/login',login)

router.get('/task/:userID',getTask)

router.post('/post',postTask)


module.exports=router