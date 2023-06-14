const mongoose = require('mongoose')

const produtoSchema = mongoose.Schema({
    nome: { type: String, required: true},
    descricao: { type: String, required: true},
    valor: { type: Number, required: true},
    emEstoque: { type: Boolean, required: true},
    publicadoEm: { type: Number, required: true}
})

const produto = mongoose.model('produtos', produtoSchema)

module.exports = produto