// src/db/SyncStatuses.js
import { DataTypes } from 'sequelize';
import sequelize from '../db/database.js';

const SyncStatuses = sequelize.define('SyncStatuses', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  lastSync: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

export default SyncStatuses;
