const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Team = sequelize.define(
  'Team',
  {
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      validate: {
        notNull: { msg: 'O nome do time é obrigatório' },
        notEmpty: { msg: 'O nome do time é obrigatório' },
        len: { args: [1, 40], msg: 'O nome do time deve ter até 40 caracteres' },
      },
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true,
      validate: {
        len: { args: [0, 200], msg: 'A descrição deve ter até 200 caracteres' },
      },
    },
  },
  { tableName: 'teams' }
);

Team.MAX_POKEMON = 6;

module.exports = Team;
