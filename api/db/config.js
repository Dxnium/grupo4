import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
  host: process.env.DB_SERVER,
  dialect: 'mssql',
  dialectOptions: {
    options: { encrypt: false, trustServerCertificate: true },
  },
  logging: console.log,
});

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

export default sequelize;