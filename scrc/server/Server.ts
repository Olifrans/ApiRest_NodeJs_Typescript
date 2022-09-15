import express from "express";


const server = express();

//Get
server.get('/', (_, res)=> {
    return res.send('Teste realizado com sucesso!')
});


export {server};

