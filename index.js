const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const AlunoRouter = require('./routers/Alunorouter');

//Realizando conexão com banco de dados
try{
    mongoose.connect(process.env.DB_KEY);
} catch (error) {
    console.log("Erro durante a conexão com MongoDB");
}

//Middlewares utilizados
app.use(express.json());
app.use(cors());

app.use(AlunoRouter);

//Checagem
app.listen(process.env.PORT || 3000, () => {
    console.log('O app está funcionando.')
});