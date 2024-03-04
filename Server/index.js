const app=require("./server")
const {conn}=require('./db')
conn.sync({force:true}).then(()=>{
  app.listen(3001, () => {
    console.log(`Example app listening on port 3001`)
  })
}).catch((err)=>{console.log(err);})
