const express = require("express");
const cors = require('cors')
const axios = require("axios");
const {generator} = require("../services/index");

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/pokedex', async (req, res) => {
    await generator('/pokedex', res)
})

app.listen(3000, () => {
    console.log("Started on PORT 3000");
})

