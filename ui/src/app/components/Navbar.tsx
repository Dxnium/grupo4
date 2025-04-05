"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useUserContext } from "../context/UserContext";
import Colaboradores from '../(routes)/admin/colaboradores/page';

export default function Navbar() {
  const { user } = useUserContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: user?.role_id === 3 ? "#000" : "#1976d2" }}>
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
          {!user && (
            <Link className="text-white" href="/" passHref>
              <Button color="inherit">Login</Button>
            </Link>
          )}

          {user?.role_id === 1 && (
            <>
              <Link className="text-white" href="/clientes/productos" passHref>
                <Button color="inherit">Inventario</Button>
              </Link>
              <Link
                className="text-white"
                href="/clientes/editarUsuario"
                passHref
              >
                <Button color="inherit">Editar Informacion</Button>
              </Link>
              <Link
                className="text-white"
                href="/clientes/resumenUsuario"
                passHref
              >
                <Button color="inherit">Informacion Usuario</Button>
              </Link>
            </>
          )}

          {user?.role_id === 3 && (
            <>
              <Link className="text-white" href="/admin/clientes" passHref>
                <Button color="inherit">Clientes</Button>
              </Link>
              <Link
                className="text-white"
                href="/admin/colaboradores"
                passHref
              >
                <Button color="inherit">Colaboradores</Button>
              </Link>
              <Link
                className="text-white"
                href="/admin/reportes"
                passHref
              >
                <Button color="inherit">Reportes</Button>
              </Link>
            </>
          )}

          {user && (
            <Link className="text-white" href="/" passHref>
              <Button
                color="inherit"
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.href = "/";
                }}
              >
                Logout
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
