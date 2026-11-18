const sequelize = require('../config/database');
const User = require('./User');
const Team = require('./Team');
const Pokemon = require('./Pokemon');
const TeamPokemon = require('./TeamPokemon');

User.hasMany(Team, { foreignKey: 'userId', as: 'teams', onDelete: 'CASCADE' });
Team.belongsTo(User, { foreignKey: 'userId', as: 'owner' });

Team.belongsToMany(Pokemon, {
  through: { model: TeamPokemon, unique: false },
  foreignKey: 'teamId',
  otherKey: 'pokemonId',
  as: 'pokemon',
});
Pokemon.belongsToMany(Team, {
  through: { model: TeamPokemon, unique: false },
  foreignKey: 'pokemonId',
  otherKey: 'teamId',
  as: 'teams',
});

Team.hasMany(TeamPokemon, { foreignKey: 'teamId', as: 'entries', onDelete: 'CASCADE' });
TeamPokemon.belongsTo(Team, { foreignKey: 'teamId', as: 'team' });
Pokemon.hasMany(TeamPokemon, { foreignKey: 'pokemonId', as: 'entries', onDelete: 'CASCADE' });
TeamPokemon.belongsTo(Pokemon, { foreignKey: 'pokemonId', as: 'species' });

module.exports = { sequelize, User, Team, Pokemon, TeamPokemon };
