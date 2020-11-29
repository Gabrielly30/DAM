module.exports = (() => {
  const tarefaController = require('../controllers/tarefa.controller');
  var router = require('express').Router();

  // localhost:3000/api/tarefa/
  router.post('/', async (req, res) => {
    const tarefa = await tarefaController.store(req.body);
    res.json(tarefa);
  });

  // localhost:3000/api/tarefa/
  router.get('/', async(req, res) => {
    const tarefa = await tarefaController.index();
    res.json(tarefa);
  });

  // localhost:3000/api/tarefa/id
  router.get('/:id', async(req, res) => {
    const tarefa = await tarefaController.show(req.params.id);
    res.json(tarefa);
  });

  // localhost:3000/api/tarefa/id
  router.put('/:id', async(req, res) => {
    const tarefa = await tarefaController.update(req.body, req.params.id);
    res.json(tarefa);
  });

  // localhost:3000/api/tarefa/id
  router.delete('/:id', async(req, res) => {
    const resultado = await tarefaController.destroy(req.params.id);
    res.json(resultado);
  });

  return router;
})()