var socket = io('http://127.0.0.1:3000')
socket.connect()

const succesKeys={
    1:"Inserio"
}

const erroKeys={
    0:"Erro de Conexao ao bd",
    1:"Erro ao inserir",
}

socket.emit("AddFlor",{"nome":"rosa","cor":"Vermelho","petalas":5,"preco":10.5})



socket.on("erro",data=>{
    console.log(erroKeys[data])
})
socket.on("success",data=>{
    console.log(succesKeys[data])
})