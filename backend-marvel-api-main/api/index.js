var md5 = require('md5');
var express = require("express");

const axios = require("axios");
const cors = require('cors');
const time = 1000;

const apikey = process.env.API_KEY
const secretKey = process.env.SECRET_KEY
const hash = md5(time+secretKey+apikey);

var app = express()

app.use(cors({
    origin: '*',
    methods: ['POST', 'GET', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'Content-Type', 'Accept', 'Authorization', 'X-Requested-With']
}));

app.listen(3800)

app.get("/marvel-api/:password",(req,res) => {
    var password = req.params.password

    if(process.env.PASSWORD_CONNECTION == password){
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${time}&apikey=${apikey}&hash=${hash}`)
            .then(
                (response) => {
                    const data = response.data.data.results.map(obj => ({
                        id:obj.id,
                        name:obj.name,
                        description:obj.description,
                        thumbnail:obj.thumbnail.path.concat(".",obj.thumbnail.extension),
                    }))
                    
                    res.status(200).send({
                        result:data
                    })
                }
            )
            .catch(
                (error) => {
                    res.status(400).send({
                        message:"Erro ao consultar dados " + error.message
                    })
                }
            );
    }else{
        res.status(403).send({
            message:"Invalido entrada de acesso a API"
        })
    }

})

app.get("/marvel-api/:id/:password",(req,res) => {
    var password = req.params.password
    var id = req.params.id

    if(process.env.PASSWORD_CONNECTION == password){
        axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${time}&apikey=${apikey}&hash=${hash}`)
            .then(
                (response) => {
                    const data = response.data.data.results.map(obj => ({
                        id:obj.id,
                        name:obj.name,
                        description:obj.description,
                        thumbnail:obj.thumbnail.path.concat(".",obj.thumbnail.extension),
                        comics:obj.comics.items,
                        series:obj.series.items,
                        stories:obj.stories.items,
                        events:obj.events.items,
                    }))

                    res.status(200).send({
                        result:data
                    })
                }
            )
            .catch(
                (error) => {
                    res.status(400).send({
                        message:"Erro ao consultar dados" + error.message
                    })
                }
            );
    }else{
        res.status(403).send({
            message:"Invalido entrada de acesso a API"
        })
    }

})