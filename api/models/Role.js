import { DataTypes } from 'sequelize';
import sequelize from '../db/config.js';

const Role = sequelize.define('Role', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Role;