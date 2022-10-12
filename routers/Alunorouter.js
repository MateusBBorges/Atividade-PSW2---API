const AlunoRouter = require('express').Router();
const Aluno = require('../model/Aluno');

AlunoRouter.get('/alunoall', async (req, res) => {
    try {
        const result = await Aluno.find({});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Ocorreu um erro durante a busca'});
    }
});

AlunoRouter.get('/alunoid', async (req, res) => {
    try {
        const result = await Aluno.findOne({email: req.params.email});
        res.json(result);
    } catch (error) {
        res.json({mensagem: 'Ocorreu um erro durante a busca'});
    }
});

AlunoRouter.post('/aluno-cadastrar', async (req, res) => {
    try{
        const result = await Aluno.create(req.body);
        res.json({result});
    } catch (error) {
        res.json({mensagem: 'Ocorreu um erro durante o cadastro'});
    }
    

});

AlunoRouter.put('/aluno-atualizar-email', async (req, res) => {
    try{
        const result = await Aluno.updateOne({email: req.body.email}, req.body);
        res.json({result});
    } catch (error) {
        res.json({mensagem: 'Ocorreu um erro durante a atualização'});
    }

});

AlunoRouter.put('/aluno-atualizar-telefone', async (req, res) => {
    try{
        const result = await Aluno.updateOne({email: req.body.telefone}, req.body);
        res.json({result});
    } catch (error) {
        res.json({mensagem: 'Ocorreu um erro durante a atualização'});
    }

});

AlunoRouter.put('/aluno-atualizar-serie', async (req, res) => {
    try{
        const result = await Aluno.updateOne({email: req.body.serie}, req.body);
        res.json({result});
    } catch (error) {
        res.json({mensagem: 'Ocorreu um erro durante a atualização'});
    }

});

AlunoRouter.delete('/aluno-delete', async (req, res) => {
    try {
        await Aluno.deleteOne({email: req.body.email});
        res.json({mensagem: 'Aluno excluído'}); 
    } catch (error) {
        res.json({mensagem: 'Erro na exclusão'});
    }
});

module.exports = AlunoRouter;
