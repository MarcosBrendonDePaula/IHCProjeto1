const server = require('./Factory/app')
const io = require('socket.io')(server)

const Flor = require('./Modelos/Flor')
const FloresDao = require('./Controladores/FlorDAO')


io.on("connect",socket =>{
    socket.on('AddFlor',data=>{
        FloresDao.CadFlor(new Flor(data.nome,data.petalas,data.cor,data.preco),socket)
    })
})