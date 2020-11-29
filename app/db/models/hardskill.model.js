const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js')

const HardSkill = sequelize.define(name, {
  descricao: {
    type: DataTypes.STRING(50)
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

HardSkill.associate = (models)=>{
  HardSkill.belongsToMany(models.aluno, {
    through: 'aluno_hardskill',
    timestamps: false,
    foreignKey: {
      name: 'id_hardskill',
    },
    as: 'alunos'
  });

  HardSkill.belongsToMany(models.atividade_avaliativa, {
    through: 'atividade_avaliativa_hardskill',
    timestamps: false,
    foreignKey: {
      name: 'id_hardskill',
    },
    as: 'atividades_avaliativas'
  });

  HardSkill.belongsToMany(models.turma, {
    through: 'turma_hardskill',
    timestamps: false,
    foreignKey: {
      name: 'id_hardskill',
    },
    as: 'turmas'
  });

  HardSkill.belongsToMany(models.disciplina, {
    through: 'disciplina_hardskill',
    timestamps: false,
    foreignKey: {
      name: 'id_hardskill',
    },
    as: 'disciplinas'
  });
}

module.exports = HardSkill;
