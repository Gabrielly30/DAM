const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js')

const SoftSkill = sequelize.define(name, {
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

SoftSkill.associate = (models) => {
    SoftSkill.belongsToMany(models.aluno, {
    through: 'aluno_softskill',
    timestamps: false,
    foreignKey: {
      name: 'id_softskill',
    },
    as: 'alunos'
  });

//   SoftSkill.belongsToMany(models.aluno, {
//     through: 'aluno_avaliacao360',
//     timestamps: false,
//     foreignKey: {
//       name: 'id_softskill',
//     },
//     as: 'avalicoes'
//   });

}

module.exports = SoftSkill;