const mysql = require("mysql");

function connect(){
    return mysql.createConnection({
        host: "localhost",
        user: "teddy",
        password: "teddy",
        database: "pokedex"
    });
}

module.exports ={
    connect
}
