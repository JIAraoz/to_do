const {Task}=require('../db')

const getTask=(req,res)=>{

   Task.findAll({where:{userId:req.params.userId}}).then((task)=>{
    if(task.length>0){
        res.json(task).status(200)
    }
    else{
        res.json({message:"no se encontraron tareas para este usuario"})
    }
   }).catch((err)=>{
    console.error('Error al recuperar las tareas:', error);
    res.status(500).json({ message: "Error interno del servidor" })
   })
    
}
module.exports=getTask
