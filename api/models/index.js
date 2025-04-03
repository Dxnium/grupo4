import sequelize from '../db/config.js';
import Usuario from './Usuario.js';
import Producto from './Producto.js';
import Role from './Role.js';

// Relaciones
Usuario.belongsTo(Role, { foreignKey: 'role_id' });

export {
  sequelize,
  Usuario,
  Producto,
  Role,
};