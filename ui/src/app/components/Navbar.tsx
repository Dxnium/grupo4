'use client'
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useUserContext } from "../context/UserContext";

export default function Navbar() {
  const { user } = useUserContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopeasy
          </Typography>
          <Link className="text-white" href="/" passHref>
            <Button color="inherit">Inicio</Button>
          </Link>
          <Link className="text-white" href="/clientes/productos" passHref>
            <Button color="inherit">Inventario</Button>
          </Link>
          <Link className="text-white" href="/clientes/editarUsuario" passHref>
            <Button color="inherit">Editar Informacion</Button>
          </Link>
          <Link className="text-white" href="/clientes/resumenUsuario" passHref>
            <Button color="inherit">Informacion Usuario</Button>
          </Link>
          <Typography variant="h6" component="div">
            <p>{user?.nombre}</p>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
