const {data,dataName}= require("../services/methodes/motismadex");

async function generator(url,res){
    switch (url){
        case '/pokedex':
            return data(res)
        default:
            break
    }
}

module.exports ={
    generator
}
