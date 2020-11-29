const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js')

const Aluno = sequelize.define(name, {
  matricula: {
    type: DataTypes.STRING(10)
  }
}, {
  sequelize,
  tableName: name,
  timestamps:false
});

Aluno.associate = (models)=>{
  Aluno.belongsTo(models.usuario, {
    foreignKey: {
      name: 'id_usuario'
    },
    as: 'usuario'
  }); //relacao 1 pra 1

  Aluno.belongsToMany(models.hardskill, {
    through: 'aluno_hardskill',
    timestamps: false,
    foreignKey: {
      name: 'id_aluno',
    },
    as: 'hardskills'
  });

  Aluno.belongsToMany(models.turma, {
    through: 'aluno_turma',
    timestamps: false,
    foreignKey: {
      name: 'id_aluno',
    },
    as: 'turmas'
  });

  Aluno.belongsToMany(models.grupo, {
    through: 'aluno_grupo',
    timestamps: false,
    foreignKey: {
      name: 'id_aluno',
    },
    as: 'grupos'
  });

  Aluno.hasMany(models.tarefa, {
    foreignKey: {
      name: 'id_aluno'
    },
    as: 'tarefas'
  });


  Aluno.belongsToMany(models.softskill, {
    through: 'aluno_softskill',
    timestamps: false,
    foreignKey: {
      name: 'id_aluno',
    },
    as: 'softskills'
  });

  Aluno.belongsTo(models.curso, {
    foreignKey: {
      name: 'id_curso'
    },
    as: 'curso'
  });

  Aluno.hasMany(models.questao_dia, {
    foreignKey: {
      name: 'id_aluno'
    },
    as: 'questoes_dia'
  });

  Aluno.hasMany(models.avaliacao_360, {
    foreignKey: {
      name: 'id_aluno'
    },
    as: 'avaliacoes_360'

  });
}

module.exports = Aluno;