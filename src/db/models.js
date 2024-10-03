// src/models.js
import sequelize from './database.js';
import { DataTypes } from 'sequelize';

export const PuntosRecarga = sequelize.define('PuntosRecargas', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
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
}, {
  timestamps: true,
});

export const SyncStatus = sequelize.define('SyncStatus', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Agrega autoIncrement para id
  },
  lastSync: {
    type: DataTypes.DATE,
  },
}, {
  timestamps: true, // Habilitar timestamps para crear createdAt y updatedAt
});
