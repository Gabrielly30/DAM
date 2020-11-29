module.exports = (() => {
  const questaoController = require('../controllers/questao.controller');
  var router = require('express').Router();

  // localhost:3000/api/questao/
  router.post('/', async (req, res) => {
    const questao = await questaoController.store(req.body);
    res.json(questao);
  });

  // localhost:3000/api/questao/
  router.get('/', async(req, res) => {
    const questoes = await questaoController.index();
    res.json(questoes);
  });

  // localhost:3000/api/questao/id
  router.get('/:id', async(req, res) => {
    const questao = await questaoController.show(req.params.id);
    res.json(questao);
  });

  // localhost:3000/api/questao/id
  router.put('/:id', async(req, res) => {
    const questao = await questaoController.update(req.body, req.params.id);
    res.json(questao);
  });

  // localhost:3000/api/questao/id
  router.delete('/:id', async(req, res) => {
    const resultado = await questaoController.destroy(req.params.id);
    res.json(resultado);
  });

  return router;
})()