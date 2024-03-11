const {DataTypes}=require('sequelize')



module.exports=(sequelize)=>{
    sequelize.define('User',{
     uuid:{
       primaryKey:true,
        type:DataTypes.UUID
        ,defaultValue:sequelize.UUIDV4
        ,allowNull:false},
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