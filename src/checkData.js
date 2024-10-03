// scripts/checkData.js
const { Sequelize, DataTypes } = require('sequelize');

// Configura tu conexión a SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite', // Ajusta la ruta según donde esté tu base de datos
});

const PuntosRecarga = sequelize.define('PuntosRecarga', {
  local: {
    type: DataTypes.STRING,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  latitud: {
    type: DataTypes.STRING,
  },
  longitud: {
    type: DataTypes.STRING,
  },
});

async function checkData() {
  await sequelize.sync(); // Sincroniza los modelos con la base de datos
  const puntos = await PuntosRecarga.findAll();
  console.log('Puntos de Recarga:', puntos);
  sequelize.close();
}

checkData().catch((error) => {
  console.error('Error checking data:', error);
});
