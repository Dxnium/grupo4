"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const InsertPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    personaId: "12345", // ID fija o puedes pasarla como prop
    nombreUsuario: "",
    contrasena: "",
    nombre: "",
    email: "",
    age: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Registro de Información
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField 
            label="ID Persona" 
            name="personaId" 
            value={formData.personaId} 
            fullWidth 
            margin="normal" 
            InputProps={{ readOnly: true }} 
          />
          <TextField 
            label="Usuario" 
            name="nombreUsuario" 
            value={formData.nombreUsuario} 
            onChange={handleChange} 
            fullWidth 
            margin="normal" 
          />
          <TextField 
            label="Contraseña" 
            name="contrasena" 
            type="password"
            value={formData.contrasena} 
            onChange={handleChange} 
            fullWidth 
            margin="normal" 
          />
          <TextField 
            label="Nombre" 
            name="nombre" 
            value={formData.nombre} 
            onChange={handleChange} 
            fullWidth 
            margin="normal" 
          />
          <TextField 
            label="Correo Electrónico" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            fullWidth 
            margin="normal" 
          />
          <TextField 
            label="Edad" 
            name="age" 
            value={formData.age} 
            onChange={handleChange} 
            fullWidth 
            margin="normal" 
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Guardar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default InsertPage;
