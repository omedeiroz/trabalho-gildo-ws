const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TYPES = [
  'normal', 'fire', 'water', 'grass', 'electric', 'ice',
  'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
  'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy',
];

const typeMsg = `Tipo inválido. Use um destes: ${TYPES.join(', ')}`;

const Pokemon = sequelize.define(
  'Pokemon',
  {
    dexNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: { msg: 'Já existe um Pokémon com esse número da Pokédex' },
      validate: {
        notNull: { msg: 'O número da Pokédex é obrigatório' },
        isInt: { msg: 'O número da Pokédex deve ser inteiro' },
        min: { args: [1], msg: 'O número da Pokédex deve ser maior que zero' },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: 'Já existe um Pokémon com esse nome' },
      validate: {
        notNull: { msg: 'O nome é obrigatório' },
        notEmpty: { msg: 'O nome é obrigatório' },
      },
    },
    type1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'O tipo principal (type1) é obrigatório' },
        isIn: { args: [TYPES], msg: typeMsg },
      },
    },
    type2: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isIn: { args: [TYPES], msg: typeMsg },
      },
    },
    spriteUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: { msg: 'spriteUrl deve ser uma URL válida' },
      },
    },
  },
  { tableName: 'pokemon' }
);

Pokemon.TYPES = TYPES;

module.exports = Pokemon;
