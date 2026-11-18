const app = require('./app');
const env = require('./config/env');
const sequelize = require('./config/database');

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Banco de dados conectado');

    app.listen(env.port, () => {
      console.log(`API rodando na porta ${env.port}`);
    });
  } catch (err) {
    console.error('Falha ao iniciar a API:', err);
    process.exit(1);
  }
}

start();
