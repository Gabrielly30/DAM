const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Avaliacao360 = sequelize.define(name, {
    resposta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nota: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'criado_em'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'atualizado_em'
    },
}, {
    sequelize,
    tableName: name
});

Avaliacao360.associate = (models) => {
  Avaliacao360.belongsTo(models.atividade_avaliativa, {
    foreignKey: {
      name: 'id_atividade_avaliativa'
    },
    as: 'atividade_avaliativa'
  });

  Avaliacao360.belongsTo(models.grupo, {
    foreignKey: {
      name: 'id_grupo'
    },
    as: 'grupo'
  });

  Avaliacao360.belongsTo(models.aluno, {
    foreignKey: {
      name: 'id_aluno'
    },
    as: 'aluno'
  });

  // Avaliacao360.belongsToMany(models.softskill, {
  //   through: 'avaliacao_360_softskill',
  //   timestamps: false,
  //   foreignKey: {
  //     name: 'id_avaliacao_360',
  //   },
  //   as: 'softskills'
  // });
}

module.exports = Avaliacao360;