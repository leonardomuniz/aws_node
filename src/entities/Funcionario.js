const mongoose = require('mongoose');

const FuncionarioSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    cargo: String,
});

module.exports = mongoose.model('Funcionario', FuncionarioSchema );