const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose')
const connectionString = "mongodb+srv://Mxriaa:teste123@appdbaula.micwrct.mongodb.net/"
const Funcionario = require('./models/funcionario')
const Produto = require('./models/produto')

app.use(express.json())

app.get("/listar-funcionarios", async (req,res) => {
    try{
        let funcionario = await Funcionario.find()
        return res.status(200).json(funcionario) 
    } catch(error) {
        return res.status(500).json(funcionario)
    }
})
app.post("/cadastrar-funcionario", async (req,res) => {
    try{
        const {nome, cargo, funcional, admitidoEm} = req.body

        let funcionario = {
            nome,
            cargo,
            funcional,
            admitidoEm,
        }

        await Funcionario.create(funcionario)
        return res.status(200).json({ message: 'Funcionário cadastrado a lista com sucesso'})
    }catch (error) {
        return res.status(400).json({ error: 'Erro ao cadastrar funcionário a lista.'})
    }
})
app.get("/listar-produtos", async (req,res) => {
    try{
        let produtos = await Produto.find()
        return res.status(200).json(produtos) 
    } catch(error) {
        return res.status(500).json(error)
    }
})
app.post("/cadastrar-produto", async (req,res) => {
    try{
        const {nome, descricao, valor, emEstoque, publicadoEm} = req.body

        let produto = {
            nome,
            descricao,
            valor,
            emEstoque,
            publicadoEm
        }

        await Produto.create(produto)
        return res.status(200).json({ message: 'Produto cadastrado a lista com sucesso'})
    }catch (error) {
        return res.status(500).json({ error: 'Erro ao cadastrar produto a lista.'})
    }
})

mongoose.connect(connectionString, {
    dbName: "DevShop"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})