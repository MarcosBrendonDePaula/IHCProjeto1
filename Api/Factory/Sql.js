const mysql = require('mysql')

const config={
    host: "127.0.0.1",
    user: "root",
    password: "vertrigo",
    database: "floricultura",
    port: 3306
}

function createConnection(){
    return mysql.createConnection(config)
}

module.exports = {
    config,
    createConnection,
}