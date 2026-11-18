const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TeamPokemon = sequelize.define(
  'TeamPokemon',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nickname: {
      type: DataTypes.STRING(20),
      allowNull: true,
      validate: {
        len: { args: [0, 20], msg: 'O apelido deve ter até 20 caracteres' },
      },
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
      validate: {
        isInt: { msg: 'O nível deve ser inteiro' },
        min: { args: [1], msg: 'O nível mínimo é 1' },
        max: { args: [100], msg: 'O nível máximo é 100' },
      },
    },
  },
  { tableName: 'team_pokemon' }
);

module.exports = TeamPokemon;
