const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

let bancoDeDadosProdutos = []

app.get('/listar-produtos', (req, res) => {
    try{
        return res.send(bancoDeDadosProdutos)
    }catch (error){
        return res.status(400).json({ error: 'Erro! Tente Novamente'})
    }
})

app.post('/adicionar-produto', (req, res) => {
    try {
        let body = req.body
        bancoDeDadosProdutos.push(produto)
        return res.status(200).json({ message: 'Produto adicionado com sucesso'})
    } catch (error){
        return res.status(400).json({ error: 'Erro ao adicionar produto.'})
    }
})
app.listen(port, function () {
    console.log(`servidor rodando http://localhost:${port}`)
})