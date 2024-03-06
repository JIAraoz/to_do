const {Task}=require('../db')
const postTask=(req,res)=>{
    const {title,userId,body}=req.body
    if (!title || !userId || !body) {
        return res.status(400).json({ message: "Debe proporcionar el título, el ID del usuario y el cuerpo de la tarea" });
    }
    else{
        Task.create({title,userId,body}).then((task)=>{
            res.json(task).status(201)
        }).catch((err)=>{
            console.log('Error al crear tarea '+err);
            res.json({error:err.message}).status(500)
        })
    }
    
}
module.exports=postTask
