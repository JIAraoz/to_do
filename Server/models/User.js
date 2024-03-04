const {DataTypes}=require('sequelize')



module.exports=(sequelize)=>{
    sequelize.define('User',{
     uuid:{
        type:DataTypes.UUID
        ,defaultValue:sequelize.UUIDV4
        ,allowNull:false,
        primaryKey:true


     },
     username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })
}