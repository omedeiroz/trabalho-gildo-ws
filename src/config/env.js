require('dotenv').config({ quiet: true });

module.exports = {
  port: Number(process.env.PORT) || 3000,
  sqliteStorage: process.env.SQLITE_STORAGE || './database.sqlite',
};
