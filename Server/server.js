const express = require('express')
const cors=require('cors')
const morgan=require('morgan')
const routes=require('./routes')
const cookieParser = require('cookie-parser')
const server = express()
server.use(express.json())
server.use(cookieParser())
server.use(cors())
server.use(routes)
server.use(morgan('dev'))


module.exports=server 