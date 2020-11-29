module.exports = (() => {
  const hardskillController = require('../controllers/hardskill.controller');
  var router = require('express').Router();

  // localhost:3000/api/hardskill/
  router.post('/', async (req, res) => {
    const hardskill = await hardskillController.store(req.body);
    res.json(hardskill);
  });

  // localhost:3000/api/hardskill/
  router.get('/', async(req, res) => {
    const hardskills = await hardskillController.index();
    res.json(hardskills);
  });

  // localhost:3000/api/hardskill/id
  router.get('/:id', async(req, res) => {
    const hardskill = await hardskillController.show(req.params.id);
    res.json(hardskill);
  });

  // localhost:3000/api/hardskill/id
  router.put('/:id', async(req, res) => {
    const hardskill = await hardskillController.update(req.body, req.params.id);
    res.json(hardskill);
  });

  // localhost:3000/api/hardskill/id
  router.delete('/:id', async(req, res) => {
    const hardskill = await hardskillController.destroy(req.params.id);
    res.json(hardskill);
  });

  return router;
})()