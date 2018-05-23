//config de connection postgres
//TODO Autre database (MySQL)


const { Client } = require('pg')
let env = require('../env')

const client = new Client({
  user: env.DB_USER,
  host: env.DB_HOST,
  database: env.DB_NAME,
  password: env.DB_PASSWORD,
  port : env.DB_PORT,
})

client.connect((err)=>{
    if(err){
        console.error('connection error', err.stack)
    }
    else{
        console.error()
    }
})
module.exports = client
