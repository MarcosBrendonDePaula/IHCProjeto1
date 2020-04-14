const Banco = require('../Factory/Sql')

function CadFlor(flor,socket){
    let Conexao = Banco.createConnection()
    Conexao.connect((err)=>{
        if(err){
            socket.emit("erro",0)
            return
        }
        Conexao.query(`INSERT INTO flores (nome,petalas,cor,preco ) Values ('${flor.Nome}','${flor.Petalas}','${flor.Cor}','${flor.Preco}')`,(err)=>{
            if(err){
                socket.emit("erro",1)
            }else{
                socket.emit("success",1)
            }
        })
    })
}

module.exports={
    CadFlor,
}