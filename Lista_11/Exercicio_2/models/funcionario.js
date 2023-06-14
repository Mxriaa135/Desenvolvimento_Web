const mongoose = require('mongoose')

const funcionarioSchema = mongoose.Schema({
    nome: { type: String, required: true},
    cargo: { type: String, required: true},
    funcional: { type: Number, required: true},
    admitidoEm: { type: Number, required: true}
})

const funcionario = mongoose.model('Funcionarios', funcionarioSchema)

module.exports = funcionario