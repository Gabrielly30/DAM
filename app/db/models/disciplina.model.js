const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model', ''), '.js');

const Disciplina = sequelize.define(name, {
    codigo_identificador: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    nome: {
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
    },
}, {
    sequelize,
    tableName: name
});

Disciplina.associate = (models) => {
    Disciplina.belongsToMany(models.professor, {
        through: 'disciplina_professor',
        timestamps: false,
        foreignKey:{
            name: 'id_disciplina'
        },
        as: 'professores'
            
    });

    Disciplina.belongsToMany(models.hardskill, {
        through: 'disciplina_hardskill',
        timestamps: false,
        foreignKey:{
            name: 'id_disciplina'
        },
        as: 'hardskills'
            
    });

    Disciplina.hasMany(models.turma, {
        foreignKey: {
            name: 'id_disciplina'
        },
        as: 'turmas'
    });
}


module.exports = Disciplina;