module.exports = (() => {
  const usuarioController = require('../controllers/usuario.controller');
  var router = require('express').Router();
  
  // localhost:3000/api/usuario/
  router.post('/', async (req, res) => {
    const usuario = await usuarioController.store(req.body);
    res.json(usuario);
  });

  // localhost:3000/api/usuario/
  router.get('/', async(req, res) => {
    const usuarios = await usuarioController.index();
    res.json(usuarios);
  });

  // localhost:3000/api/usuario/id
  router.get('/:id', async(req, res) => {
    const usuario = await usuarioController.show(req.params.id);
    res.json(usuario);
  });

  // localhost:3000/api/usuario/id
  router.put('/:id', async(req, res) => {
    const usuario = await usuarioController.update(req.body, req.params.id);
    res.json(usuario);
  });

  // localhost:3000/api/usuario/id
  router.delete('/:id', async(req, res) => {
    const resultado = await usuarioController.destroy(req.params.id);
    res.json(resultado);
  });

  return router;
})()