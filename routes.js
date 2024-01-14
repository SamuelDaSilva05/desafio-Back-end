const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController');


router.get('/usuarios', UserController.buscarTodos);
router.get('/usuarios/:codigo', UserController.buscarUm);
router.post('/usuario', UserController.inserir);
router.put('/usuario/:codigo', UserController.alterar);
router.delete('/usuario/:codigo', UserController.excluir);

module.exports = router;