const {DataTypes}=require('sequelize')



module.exports=(sequelize)=>{
    sequelize.define('Task',{
     uuid:{
        type:DataTypes.UUID
        ,defaultValue:sequelize.UUIDV4
        ,allowNull:false,
        primaryKey:true


     },
     title: {
        type: DataTypes.STRING,
        
      },
      body: {
        type: DataTypes.STRING,
        
        
      }
    })
}