const mongoose = require('mongoose')

const bebidaSchema = mongoose.Schema({
    nome: { type: String, required: true},
    descricao: { type: String, required: true},
    valor: { type: Number, required: true}
})

const bebida = mongoose.model('Bebidas', bebidaSchema)

module.exports = bebida