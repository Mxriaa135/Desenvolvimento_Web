const express = require('express')
const app = express()
const port = 8000

let usuarios = [
    {
        nomeUsuario: "Fernando Alonso",
        criadoEm: "28/07",
        idade: 41,
        email: "fernandinho123@gmail.com",
        ehAdmin: false,
        telefone: ["940028922"],
        endereco: ["Rua Paraisopolis", "Espanha"]
    },
    {
        nomeUsuario: "Ferrariman",
        criadoEm: "06/03",
        idade: 28,
        email: "ferrariminhapaixao@hotmail.com",
        ehAdmin: false,
        telefone: ["912389720"],
        endereco: ["Rua Ferrari", "Ferrarilandia"]
    },
    {
        nomeUsuario: "Lewis Hamilton",
        criadoEm: "08/11",
        idade: 38,
        email: "hamilton123@gmail.com",
        ehAdmin: true,
        telefone: ["944444444"],
        endereco: ["Rua Ipiranga", "Reino Unido"]
    },
    {
        nomeUsuario: "Charles Leclerc",
        criadoEm: "09/10",
        idade: 25,
        email: "leclec@gmail.com",
        ehAdmin: true,
        telefone: ["916161616"],
        endereco: ["Rua Bumerangue", "Monaco"]
    },
    {
        nomeUsuario: "Max Verstappen",
        criadoEm: "29/02",
        idade: 25,
        email: "maxzinho@gmail.com",
        ehAdmin: false,
        telefone: ["911111111"],
        endereco: ["Rua Caravan", "Bélgica"]
    }
]
let produtos = [
    {
        nomeProduto: "Jogo Mainescrefiti",
        descricao: "Joguinho redondo",
        valor: 108,
        criadoEm: "2007",
        emEstoque: true
    },
    {
        nomeProduto: "Jogo Preciso de Velocidade",
        descricao: "Joguinho de carro",
        valor: 250,
        criadoEm: "2020",
        emEstoque: true
    },
    {
        nomeProduto: "Jogo Grande Deficit Auto",
        descricao: "Joguinho de roubar carros",
        valor: 280,
        criadoEm: "2010",
        emEstoque: true
    },
    {
        nomeProduto: "Jogo Fogareu Gratis",
        descricao: "Joguinho de tiro",
        valor: 0,
        criadoEm: "2022",
        emEstoque: true
    },
    {
        nomeProduto: "Jogo Fabricio do Gas",
        descricao: "Joguinho de diversão",
        valor: 10,
        criadoEm: "2023",
        emEstoque: true
    }
]

app.get("/usuarios", function (requisicao, resposta) {return resposta.send(usuarios)})

app.get("/produtos", function (requisicao, resposta) {return resposta.send(produtos)})

app.listen(port, function () {console.log(`servidor rodando http://localhost:${port}`)})