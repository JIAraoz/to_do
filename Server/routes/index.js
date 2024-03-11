const {Router}=require('express')
const register=require('../controllers/register')
const login=require('../controllers/login')
const getTask=require('../controllers/getTask')
const router=Router()
const postTask=require('../controllers/postTask')

router.get("/prueba",(req,res)=>{
    res.send("prueba")
    console.log("prueba");
})
router.post('/register',register)

router.post('/login',login)

router.get('/task/:userID',getTask)

router.post('/post',postTask)

 
module.exports=router  