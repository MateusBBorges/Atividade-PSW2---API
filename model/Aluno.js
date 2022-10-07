const mongoose = require('mongoose');

const AlunoSchema = mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    serie: String,
    matricula: String
});

module.exports = mongoose.model('Aluno', AlunoSchema);