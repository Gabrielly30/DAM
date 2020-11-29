module.exports = (() => {
  const aluno_hardskillsController = require('../controllers/aluno_hardskills.controller');
  var router = require('express').Router();

  // localhost:3000/api/aluno_hardskills/
  router.post('/:id', async (req, res) => {
    const hardskill = await aluno_hardskillsController.store(req.body, req.params.id);
    res.json(hardskill);
  });

  // localhost:3000/api/aluno_hardskills/id
  router.delete('/:id', async(req, res) => {
    const hardskill = await aluno_hardskillsController.destroy(req.body, req.params.id);
    res.json(hardskill);
  });

  return router;
})()