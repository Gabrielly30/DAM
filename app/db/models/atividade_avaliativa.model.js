const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const AtividadeAvaliativa = sequelize.define(name, {
    titulo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    enunciado: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data_limite: {
      type: DataTypes.DATE,
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

AtividadeAvaliativa.associate = (models) => {
  AtividadeAvaliativa.belongsTo(models.turma, {
    foreignKey: {
      name: 'id_turma'
    },
    as: 'turma'
  });

  AtividadeAvaliativa.belongsToMany(models.hardskill, {
    through: 'atividade_avaliativa_hardskill',
    timestamps: false,
    foreignKey: {
      name: 'id_atividade_avaliativa',
    },
    as: 'hardskills'
  });

  AtividadeAvaliativa.hasMany(models.avaliacao_360, {
    foreignKey: {
      name: 'id_atividade_avaliativa'
    },
    as: 'avaliacoes360'
  });

  AtividadeAvaliativa.hasMany(models.grupo, {
    foreignKey: {
      name: 'id_atividade_avaliativa'
    },
    as: 'grupos'
  });
}

module.exports = AtividadeAvaliativa;