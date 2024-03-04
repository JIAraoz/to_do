const {Router}=require('express')
const router=Router()

router.post('/register',(req,res)=>{
    res.send("soy el register")
})

module.exports=router