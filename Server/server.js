const express = require('express')
const cors=require('cors')
const morgan=require('morgan')
const routes=require('./routes')
const server = express()
server.use(express.json())
server.use(cors())
server.use(routes)
server.use(morgan('dev'))


module.exports=server