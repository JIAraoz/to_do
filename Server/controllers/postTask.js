const {Task,User}=require('../db')
const postTask= async(req,res)=>{
    const {title,userUuid,body}=req.body
    if (!title || !userUuid || !body) {
        return res.status(400).json({ message: "Debe proporcionar el título, el ID del usuario y el cuerpo de la tarea" });
    }
    else{
     try{
        const user= await User.findOne({where:{
            uuid:userUuid
        }})
        if(user){
            const task=await Task.create({
                title,body
            })
            await user.addTask(task)
            res.json({
                message:"Tarea creada correctamente"
            }).status(201)
        }
        else{
            res.json({
                message:"Usuario no encontrado "
            }).status(404)
        }

     }catch(err){
        res.json({
            message:err.message
        }).status(500)

     }
    }
    
}
module.exports=postTask
