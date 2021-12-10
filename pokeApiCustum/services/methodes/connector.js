const mysql = require("mysql");

function connectorSingle(){
    return mysql.createConnection({
        host: "localhost",
        user: "teddy",
        password: "teddy",
    });
}

function connector(){
    return mysql.createConnection({
        host: "localhost",
        user: "teddy",
        password: "teddy",
        database: "motismadex"
    });
}

module.exports ={
    connectorSingle,
    connector
}
