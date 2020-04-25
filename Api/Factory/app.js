const express=require('express')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    next()
}) 

module.exports = app
app.listen(3000)