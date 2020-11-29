const models = require('../db/models');

//GET, POST, PUT, DELETE
//(SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
//show GET ID
//store POST tarefa
//update PUT tarefa, ID
//destroy DELETE ID

exports.index = async () => {
  const resultado = await models.tarefa.findAll({
    include: ['aluno', 'grupo']
  });
  return resultado;
}

exports.show = async (id) => {
  const resultado = await models.tarefa.findByPk(id, {
    include: ['aluno']
  });
  return resultado;
}

exports.store = async (tarefa) => {
  const resultado = await models.tarefa.create(tarefa);
  return resultado;
}

exports.update = async (tarefa, id) => {
  const resultado = await models.tarefa.update(tarefa, {
    where: { id: id }
  });
  return resultado;
}

exports.destroy = async (id) => {
  const resultado = await models.tarefa.destroy({
    where: { id: id }
  });
  return resultado;
}