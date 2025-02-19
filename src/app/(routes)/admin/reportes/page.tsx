"use client"
import { useState } from "react";

interface Item {
  id: number;
  nombre: string;
  estado: "activo" | "inactivo";
  fecha: string;
}

const clientes: Item[] = [
  { id: 1, nombre: "Juan Pérez", estado: "activo", fecha: "2024-02-15" },
  { id: 2, nombre: "María López", estado: "inactivo", fecha: "2024-01-10" },
  { id: 3, nombre: "Carlos Sánchez", estado: "activo", fecha: "2024-03-05" },
];

const colaboradores: Item[] = [
  { id: 1, nombre: "Ana Martínez", estado: "activo", fecha: "2023-12-20" },
  { id: 2, nombre: "Luis Gómez", estado: "inactivo", fecha: "2024-01-25" },
  { id: 3, nombre: "Sofía Ramírez", estado: "activo", fecha: "2024-02-01" },
];

function Lista({ data, tipo }: { data: Item[]; tipo: string }) {
  const [filtro, setFiltro] = useState<"activo" | "inactivo">("activo");

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", color: "#333" }}>{tipo}</h2>
      <div>
        <button onClick={() => setFiltro("activo")} style={{ marginRight: "10px" }}>Activos</button>
        <button onClick={() => setFiltro("inactivo")}>Inactivos</button>
      </div>
      <table style={{ width: "100%", marginTop: "10px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <th>ID</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Fecha de Registro</th>
          </tr>
        </thead>
        <tbody>
          {data.filter(item => item.estado === filtro).map((item: Item) => (
            <tr key={item.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td style={{ color: item.estado === "activo" ? "green" : "red", fontWeight: "bold" }}>{item.estado}</td>
              <td>{item.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px", background: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Exportar Excel
      </button>
    </div>
  );
}

export default function Reportes() {
  return (
    <div style={{ padding: 20, display: 'grid', gap: 20, textAlign: 'center' }}>
      <Lista data={clientes} tipo="Clientes" />
      <hr style={{ width: "50%", margin: "20px auto", border: "1px solid #ccc" }} />
      <Lista data={colaboradores} tipo="Colaboradores" />
    </div>
  );
}
