import sequelize from './db/config.js';  // Ensure correct path
import { Cliente, Producto, Pedido, DetallePedido } from '../models/db_models.js'; // Adjust based on your structure

const insertTestData = async () => {
  try {
    await sequelize.sync({ force: true }); // Reset DB (optional: remove `force: true` in production)
    
    console.log('Database synchronized successfully.');

    // Insert Clientes
    const clientes = await Cliente.bulkCreate([
      { nombre: 'Juan Pérez', correo: 'juan@example.com', telefono: '123456789', direccion: 'Av. Central 123' },
      { nombre: 'Maria López', correo: 'maria@example.com', telefono: '987654321', direccion: 'Calle 45 #10-20' },
      { nombre: 'Carlos Gómez', correo: 'carlos@example.com', telefono: '456789123', direccion: 'Cra. 9 #20-30' }
    ]);

    console.log('Clientes inserted.');

    // Insert Productos
    const productos = await Producto.bulkCreate([
      { nombre: 'Laptop Dell', descripcion: 'Core i7, 16GB RAM', precio: 1200.00, stock: 10 },
      { nombre: 'Mouse Logitech', descripcion: 'Inalámbrico', precio: 30.50, stock: 50 },
      { nombre: 'Teclado Mecánico', descripcion: 'RGB con switches azules', precio: 80.00, stock: 20 }
    ]);

    console.log('Productos inserted.');

    // Insert Pedidos (each linked to a Cliente)
    const pedidos = await Pedido.bulkCreate([
      { id_cliente: clientes[0].id_cliente, estado: 'pendiente', total: 1230.50 },
      { id_cliente: clientes[1].id_cliente, estado: 'enviado', total: 1100.00 }
    ]);

    console.log('Pedidos inserted.');

    // Insert DetallesPedido (each linked to a Pedido & Producto)
    await DetallePedido.bulkCreate([
      { id_pedido: pedidos[0].id_pedido, id_producto: productos[0].id_producto, cantidad: 1, subtotal: 1200.00 },
      { id_pedido: pedidos[0].id_pedido, id_producto: productos[1].id_producto, cantidad: 1, subtotal: 30.50 },
      { id_pedido: pedidos[1].id_pedido, id_producto: productos[2].id_producto, cantidad: 2, subtotal: 160.00 }
    ]);

    console.log('Detalles de Pedido inserted.');

    console.log('✅ Test data inserted successfully.');
  } catch (error) {
    console.error('❌ Error inserting test data:', error);
  } finally {
    await sequelize.close();
  }
};

// Run script
insertTestData();