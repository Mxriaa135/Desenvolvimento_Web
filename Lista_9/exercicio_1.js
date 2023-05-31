const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
const connectionString = "mongodb+srv://Mxriaa:teste123@appdbaula.micwrct.mongodb.net/"
const Bebida = require('./models/bebidas')
const Lanche = require('./models/lanches')

app.use(express.json())

app.get("/listar-bebidas", async (req,res) => {
    try{
        let bebidas = await Bebida.find()
        return res.status(200).json(bebidas) 
    } catch(error) {
        return res.status(500).json(bebidas)
    }
})
app.post("/cadastrar-bebida", async (req,res) => {
    try{
        const {nome, descricao, valor} = req.body

        let bebida = {
            nome,
            descricao,
            valor
        }

        await Bebida.create(bebida)
        return res.status(200).json({ message: 'Bebida cadastrada a lista com sucesso'})
    }catch (error) {
        return res.status(400).json({ error: 'Erro ao cadastrar bebida a lista.'})
    }
})
app.get("/listar-lanches", async (req,res) => {
    try{
        let lanches = await Lanche.find()
        return res.status(200).json(lanches) 
    } catch(error) {
        return res.status(500).json(error)
    }
})
app.post("/cadastrar-lanche", async (req,res) => {
    try{
        const {nome, descricao, valor} = req.body

        let lanche = {
            nome,
            descricao,
            valor
        }

        await Lanche.create(lanche)
        return res.status(200).json({ message: 'Lanche cadastrado a lista com sucesso'})
    }catch (error) {
        return res.status(400).json({ error: 'Erro ao cadastrar lanche a lista.'})
    }
})

mongoose.connect(connectionString, {
    dbName: "DevsBar"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})
