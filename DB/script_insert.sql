USE ShopEasyDB;
GO

-- Insertar datos en la tabla Clientes
INSERT INTO Clientes (nombre, correo, telefono, direccion)
VALUES 
('Juan Pérez', 'juan.perez@example.com', '1234567890', 'Calle Falsa 123, Ciudad'),
('María Gómez', 'maria.gomez@example.com', '0987654321', 'Avenida Central 456, Ciudad'),
('Carlos Rodríguez', 'carlos.rod@example.com', '5678901234', 'Boulevard Norte 789, Ciudad'),
('Ana Torres', 'ana.torres@example.com', '6789012345', 'Calle Sur 321, Ciudad'),
('Pedro Sánchez', 'pedro.sanchez@example.com', '7890123456', 'Avenida Este 654, Ciudad');
GO

-- Insertar datos en la tabla Productos
INSERT INTO Productos (nombre, descripcion, precio, stock)
VALUES 
('Laptop Dell XPS', 'Laptop de alto rendimiento con Intel i7 y 16GB RAM', 1200.00, 10),
('Mouse Logitech', 'Mouse inalámbrico ergonómico', 25.50, 50),
('Teclado Mecánico Redragon', 'Teclado mecánico RGB para gaming', 75.00, 30),
('Monitor LG 27"', 'Monitor IPS Full HD', 200.00, 20),
('Auriculares Sony', 'Auriculares con cancelación de ruido', 150.00, 15);
GO

-- Insertar datos en la tabla Pedidos
INSERT INTO Pedidos (id_cliente, estado, total)
VALUES 
(1, 'pendiente', 1225.50),
(2, 'enviado', 275.00),
(3, 'entregado', 200.00),
(4, 'pendiente', 75.00),
(5, 'cancelado', 150.00);
GO

-- Insertar datos en la tabla Detalles_Pedido
INSERT INTO Detalles_Pedido (id_pedido, id_producto, cantidad, precio)
VALUES 
(1, 1, 1, 1200.00), -- Laptop Dell XPS
(1, 2, 1, 25.50),   -- Mouse Logitech
(2, 3, 1, 75.00),   -- Teclado Mecánico Redragon
(2, 4, 1, 200.00),  -- Monitor LG 27"
(3, 4, 1, 200.00),  -- Monitor LG 27"
(4, 3, 1, 75.00),   -- Teclado Mecánico Redragon
(5, 5, 1, 150.00);  -- Auriculares Sony
GO
