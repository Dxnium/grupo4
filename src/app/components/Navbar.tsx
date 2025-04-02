import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

export default function Navbar() {
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
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopeasy
          </Typography>
          <Link className='text-white' href="/" passHref>
              <Button color="inherit">Inicio</Button>
          </Link>
          <Link className='text-white' href="/login" passHref>
              <Button color="inherit">Login</Button>
          </Link>
          <Link className='text-white' href="/menu" passHref>
              <Button color="inherit">Menú</Button>
          </Link>
          <Link className='text-white' href="/insertar" passHref>
              <Button color="inherit">Insertar</Button>
          </Link>
          <Link className='text-white' href="/clientes" passHref>
              <Button color="inherit">Clientes</Button>
          </Link>
          <Link className='text-white' href="/reportes" passHref>
              <Button color="inherit">Reportes</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}