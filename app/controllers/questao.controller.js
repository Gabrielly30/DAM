const models = require('../db/models');

//GET, POST, PUT, DELETE
//(SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
//show GET ID
//store POST questao
//update PUT questao, ID
//destroy DELETE ID

exports.index = async () => {
  const resultado = await models.questao.findAll({
    include: ['usuario']
  });
  return resultado;
}

exports.show = async (id) => {
  const resultado = await models.questao.findByPk(id, {
    include: ['usuario']
  });
  return resultado;
}

exports.store = async (questao) => {
  const resultado = await models.questao.create(questao);
  return resultado;
}

exports.update = async (questao, id) => {
  const resultado = await models.questao.update(questao, {
    where: { id: id }
  });
  return resultado;
}

exports.destroy = async (id) => {
  const resultado = await models.questao.destroy({
    where: { id: id }
  });
  return resultado;
}