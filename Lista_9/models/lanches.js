const mongoose = require('mongoose')

const lancheSchema = mongoose.Schema({
    nome: { type: String, required: true},
    descricao: { type: String, required: true},
    valor: { type: Number, required: true}
})

const lanche = mongoose.model('lanches', lancheSchema)

module.exports = lanche