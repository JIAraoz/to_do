const {DataTypes}=require('sequelize')



module.exports=(sequelize)=>{
    sequelize.define('Task',{
   
     title: {
        type: DataTypes.STRING,
        
      },
      body: {
        type: DataTypes.STRING,
        
        
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Users',
          key: 'uuid'
        }
      }
    })
}