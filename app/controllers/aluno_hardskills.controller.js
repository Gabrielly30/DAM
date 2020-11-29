const models = require('../db/models');

//GET, POST, PUT, DELETE
//(SELECT, INSERT, UPDATE, DELETE)

//index GET ALL
//show GET ID
//store POST hardskill
//update PUT hardskill, ID
//destroy DELETE ID

/*
{
  "hardskills": [
    { "descricao": "Ruby" },
    { "descricao": "Python" },
    { "descricao" : "hardskill teste 2"}
  ]
}
*/
let new_aluno_hardskill = [];
exports.store = async (objHardskills, id_aluno) => {
  const aluno = await models.aluno.findOne({
    where: { id: id_aluno }
  });

  for(let h in objHardskills.hardskills){
    let hardskill = objHardskills.hardskills[h];
    console.log(hardskill);

    const [resultado] = await models.hardskill.findOrCreate({
      where: hardskill
    });

    new_aluno_hardskill.push(resultado.id);
  }

  aluno.addHardskill(new_aluno_hardskill);

  return true;
}

exports.destroy = async (objHardskills, id_aluno) => {
  const aluno = await models.aluno.findOne({
    where: { id: id_aluno }
  });

  for(let h in objHardskills.hardskills){
    let hardskill = objHardskills.hardskills[h];
    console.log(hardskill);

    const [resultado] = await models.hardskill.findOrCreate({
      where: hardskill
    });

    new_aluno_hardskill.push(resultado.id);
  }

  aluno.removeHardskill(new_aluno_hardskill);

  return true;
}