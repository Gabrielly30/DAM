const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js')

const Grupo = sequelize.define(name, {
  nome_identificador: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'criado_em'
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'atualizado_em'
  }
}, {
  sequelize,
  tableName: name
});

Grupo.associate = (models)=>{
  Grupo.hasMany(models.tarefa, {
    foreignKey: {
      name: 'id_grupo'
    },
    as: 'tarefas'
  });

  Grupo.belongsToMany(models.aluno, {
    through: 'aluno_grupo',
    timestamps: false,
    foreignKey: {
      name: 'id_grupo',
    },
    as: 'alunos'
  });

  Grupo.hasMany(models.avaliacao_360, {
    foreignKey: {
      name: 'id_grupo'
    },
    as: 'avaliacoes_360'
  });

  Grupo.belongsTo(models.turma, {
    foreignKey: {
      name: 'id_turma'
    },
    as: 'turma'
  });

  Grupo.belongsTo(models.atividade_avaliativa, {
    foreignKey: {
      name: 'id_atividade_avaliativa'
    },
    as: 'atividade_avaliativa'
  });
}

module.exports = Grupo;