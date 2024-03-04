require('dotenv').config()
const{DB,PASS,USER,PORT }=process.env
const {Sequelize}=require('sequelize')
const fs = require('fs');
const path = require('path');

const sequelize =new Sequelize(`postgres://${USER}:${PASS}@${PORT}/${DB}`,{
    logging:false,
    native:false
})

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const{User,Task}=sequelize.models

User.hasMany(Task)
Task.belongsTo(User)

User.prototype.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports={
    ...sequelize.models,
    conn:sequelize
}