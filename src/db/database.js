import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
});

const authenticateDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');

    // Sincronizar modelos
    await sequelize.sync(); // Esto crea las tablas si no existen
    console.log('Las tablas han sido sincronizadas.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

authenticateDatabase();

export default sequelize;
