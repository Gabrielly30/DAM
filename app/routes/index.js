const usuario = require('./usuario.routes');
const questao = require('./questao.routes');
const hardskill = require('./hardskill.routes');
const aluno_hardskills = require('./aluno_hardskills.routes');
const tarefa = require('./tarefa.routes');

module.exports = app => {
  app.use('/api/usuario', usuario);
  app.use('/api/questao', questao);
  app.use('/api/hardskill', hardskill);
  app.use('/api/aluno_hardskills', aluno_hardskills);
  app.use('/api/tarefa', tarefa);
}