const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js')

const Curso = sequelize.define(name, {
  Nome: {
    type: DataTypes.STRING(30)
  },
  Periodo: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  tableName: name,
  timestamps:false
});

Curso.associate = (models)=>{
  Curso.belongsToMany(models.turma, {
    through: 'turma_curso',
    timestamps: false,
    foreignKey: {
      name: 'id_curso',
    },
    as: 'turmas'
  });

  Curso.hasMany(models.aluno, {
    foreignKey: {
      name: 'id_curso'
    },
    as: 'alunos'
  });
}

module.exports = Curso;