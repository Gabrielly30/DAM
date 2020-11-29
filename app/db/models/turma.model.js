const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js')

const Turma = sequelize.define(name, {
  codigo_identificador: {
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

Turma.associate = (models)=>{
  Turma.belongsTo(models.disciplina, {
    foreignKey: {
      name: 'id_disciplina'
    },
    as: 'disciplina'
  });

  Turma.hasMany(models.grupo, {
    foreignKey: {
      name: 'id_turma'
    },
    as: 'grupos'
  });

  Turma.hasMany(models.atividade_avaliativa, {
    foreignKey: {
      name: 'id_turma'
    },
    as: 'atividades_avaliativas'
  });

  Turma.belongsToMany(models.curso, {
    through: 'turma_curso',
    timestamps: false,
    foreignKey: {
      name: 'id_turma',
    },
    as: 'cursos'
  });

  Turma.belongsToMany(models.hardskill, {
    through: 'turma_hardskill',
    timestamps: false,
    foreignKey: {
      name: 'id_turma',
    },
    as: 'hardskills'
  });

  Turma.belongsToMany(models.aluno, {
    through: 'aluno_turma',
    timestamps: false,
    foreignKey: {
      name: 'id_turma',
    },
    as: 'alunos'
  });

  Turma.belongsToMany(models.professor, {
    through: 'turma_professor',
    timestamps: false,
    foreignKey: {
      name: 'id_turma',
    },
    as: 'professores'
  });
}

module.exports = Turma;