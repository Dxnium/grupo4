import express from 'express';
import Producto from '../models/Producto.js';

const routerProducto = express.Router();

routerProducto.get('/', async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default routerProducto;