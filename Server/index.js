const server=require("./server")
const {conn}=require('./db')
const PORT = 3001;
conn.sync({force:true}).then(()=>{
  server.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
}).catch((err)=>{console.log(err);}) 
      