const express=require('express')
const path=require('path')
const app = express()
const server = require('http').createServer(app)

app.use(express.static(path.join(__dirname,'../public')))
app.set('views',path.join(__dirname,'../public'))
app.engine('html',require('ejs').renderFile)
app.set('view engine','html')
app.use('/',(req,res)=>{
    res.render('index.html')
})

module.exports=server
server.listen(3000)