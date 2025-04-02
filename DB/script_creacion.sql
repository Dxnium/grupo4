-- Crear la base de datos si no existe
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'ShopEasyDB')
BEGIN
    CREATE DATABASE ShopEasyDB;
END
GO
USE ShopEasyDB;
GO

-- Crear la tabla de Clientes si no existe
IF OBJECT_ID('Clientes', 'U') IS NULL
BEGIN
    CREATE TABLE Clientes (
        id_cliente INT IDENTITY(1,1) PRIMARY KEY,
        nombre NVARCHAR(100) NOT NULL,
        correo NVARCHAR(100) UNIQUE NOT NULL,
        telefono NVARCHAR(15),
        direccion NVARCHAR(MAX),
        fecha_registro DATETIME2(0) DEFAULT GETDATE()
    );
END
GO

-- Crear la tabla de Productos si no existe
IF OBJECT_ID('Productos', 'U') IS NULL
BEGIN
    CREATE TABLE Productos (
        id_producto INT IDENTITY(1,1) PRIMARY KEY,
        nombre NVARCHAR(100) NOT NULL,
        descripcion NVARCHAR(MAX),
        precio DECIMAL(10,2) NOT NULL,
        stock INT NOT NULL,
        fecha_creacion DATETIME2(0) DEFAULT GETDATE()
    );
END
GO

-- Crear la tabla de Pedidos si no existe
IF OBJECT_ID('Pedidos', 'U') IS NULL
BEGIN
    CREATE TABLE Pedidos (
        id_pedido INT IDENTITY(1,1) PRIMARY KEY,
        id_cliente INT,
        fecha_pedido DATETIME2(0) DEFAULT GETDATE(),
        estado NVARCHAR(20) CHECK (estado IN ('pendiente', 'enviado', 'entregado', 'cancelado')) NOT NULL,
        total DECIMAL(10,2) NOT NULL,
        FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
    );
END
GO

-- Crear la tabla de Detalles de Pedidos si no existe
IF OBJECT_ID('Detalles_Pedido', 'U') IS NULL
BEGIN
    CREATE TABLE Detalles_Pedido (
        id_detalle INT IDENTITY(1,1) PRIMARY KEY,
        id_pedido INT,
        id_producto INT,
        cantidad INT NOT NULL,
        precio DECIMAL(10,2) NOT NULL,
        fecha_creacion DATETIME2(0) DEFAULT GETDATE(),
        FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido),
        FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
    );
END
GO
