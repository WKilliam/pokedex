const mysql = require("mysql");

async function data(res){
    const con = mysql.createConnection({
        host: "localhost",
        user: "teddy",
        password: "teddy",
        database: "pokedex"
    });
    return con.connect(function(err) {
        if (err) throw err;
        //Select all customers and return the result object:
        return con.query("SELECT * FROM pokemons", function (err, result, fields) {
            if (err) throw err;
            res.json(Object.values(JSON.parse(JSON.stringify(result))))
        });
    });
}

async function data(res){

    return con.connect(function(err) {
        if (err) throw err;
        //Select all customers and return the result object:
        return con.query("SELECT * FROM pokemons", function (err, result, fields) {
            if (err) throw err;
            res.json(Object.values(JSON.parse(JSON.stringify(result))))
        });
    });
}

module.exports = {
    data
}
