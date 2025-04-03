import express from 'express';
import { sequelize } from './models/index.js';
import productosRouter from './controllers/productos_controller.js';
import routerUsuario from './controllers/usuario_controller.js';

const app = express();

app.use(express.json());

app.use('/productos', productosRouter)
app.use('/usuarios', routerUsuario)

const PORT = process.env.PORT || 3000;
const startServer = async () => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();