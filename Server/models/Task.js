const {DataTypes, Sequelize}=require('sequelize')



module.exports=(sequelize)=>{
    sequelize.define('Task',{
   
     title: {
        type: DataTypes.STRING,
        
      },
      body: {
        type: DataTypes.STRING,
        
        
      },
      uuid:{
        type:DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
       }
    })
} 