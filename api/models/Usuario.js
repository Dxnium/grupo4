import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";
import Role from "./Role.js";

const Usuario = sequelize.define('Usuario', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'roles',
        key: 'id',
      },
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });

Usuario.belongsTo(Role, { foreignKey: 'role_id' });

export default Usuario;