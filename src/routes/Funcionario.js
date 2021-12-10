const express = require('express');

const listar_funcionarios = require('../useCases/Funcionario/index-all-users');
const consultar_funcionario = require('../useCases/Funcionario/show-user');
const criar_funcionario = require('../useCases/Funcionario/create-user');
const atualizar_funcionario = require('../useCases/Funcionario/update-user');
const deletar_funcionario = require('../useCases/Funcionario/delete-user');

const router = express.Router();


router.get('/',(request, response) => response.json({msg:"A API está funcionando!, digite '/funcionario' após a URL "}));

router.get('/funcionario', listar_funcionarios.index);
router.get('/funcionario/:_id', consultar_funcionario.show);
router.post('/funcionario', criar_funcionario.create);
router.put('/funcionario/:_id', atualizar_funcionario.update);
router.delete('/funcionario/:_id', deletar_funcionario.delete);



module.exports = router;