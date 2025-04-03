import express from 'express';
import bycrypt from 'bcrypt';
import { Usuario } from '../models/index.js';
import { Role } from '../models/index.js';

const routerUsuario = express.Router();

routerUsuario.get('/login', async (req, res) => {
    try {
        const { password, email } = req.query;
        // Find the user by email
        const user = await Usuario.findOne({ where: { email } });

        if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const isMatch = await bycrypt.compare(password, user.contraseña);
        if (!isMatch) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

routerUsuario.post('/registro', async (req, res) => {
    try {
        let nuevoUsuario = req.body;
        let password = await bycrypt.hash(nuevoUsuario.contraseña, 10);
        nuevoUsuario = { ...nuevoUsuario, role_id: 1, activo: true, contraseña: password };
        const usuario = await Usuario.create(nuevoUsuario);
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

routerUsuario.patch('/', async (req, res) => {
    try {
        const { id, ...usuario } = req.body;
        await Usuario.update(usuario, { where: { id } });
        const usuarioActualizado = await Usuario.findByPk(id);
        res.json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

routerUsuario.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

routerUsuario.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        if (usuario.role_id === 3) {
            return res.status(400).json({ error: 'No se puede eliminar el usuario administrador' });
        }
        // Desactivar el usuario en lugar de eliminarlo
        await Usuario.update({activo: false}, { where: { id } });
        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

routerUsuario.get('/role/:roleName', async (req, res) => {
    try {
        const { roleName } = req.params;

        // encontrar role por nombre
        const role = await Role.findOne({ where: { nombre: roleName } });
        if (!role) {
          return res.status(404).json({ error: 'Role no encontrado' });
        }

        const users = await Usuario.findAll({ where: { role_id: role.id } });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default routerUsuario;