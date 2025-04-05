"use client";
import { useState, useEffect } from "react";
import clientesImport from "../../../db/data.json";

interface traerClientes {
  id_cliente: number;
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
  createdAt: string;
}

const getClientes = async (): Promise<traerClientes[]> => {
  try {
    const res: Response = await fetch(
      "http://localhost:5000/usuarios/role/cliente"
    );
    const data: traerClientes[] = await res.json();
    return data;
  } catch (error: unknown) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const getColaboradores = async (): Promise<traerClientes[]> => {
  try {
    const res: Response = await fetch(
      "http://localhost:5000/usuarios/role/colaborador"
    );
    const data: traerClientes[] = await res.json();
    return data;
  } catch (error: unknown) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default function Reportes() {
  const [clientesArray, setClientesArray] = useState<traerClientes[]>([]);
  const [colaboradoresArray, setColaboradoresArray] = useState<traerClientes[]>([]);

  useEffect(() => {
    const fetchClientesAndColaboradores = async () => {
      const clientes = await getClientes();
      const colab = await getColaboradores();
      setClientesArray(clientes);
      setColaboradoresArray(colab);
    };
    fetchClientesAndColaboradores();
  }, []);

  return (
    <>
      <main>
        <div className="container">
          <h1>Reportes</h1>
        </div>
        <div className="container mt-6 mb-6">
          <h2 className="text-3xl font-bold mb-4">
            Reporte Informacion de Clientes
          </h2>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border text-left">Nombre</th>
                <th className="px-4 py-2 border text-left">
                  Correo Electronico
                </th>
                <th className="px-4 py-2 border text-left">Telefono</th>
                <th className="px-4 py-2 border text-left">Dirección</th>
                <th className="px-4 py-2 border text-left">
                  Fecha de registro
                </th>
              </tr>
            </thead>
            <tbody>
              {clientesArray.map((datoCliente) => (
                <tr key={datoCliente.id_cliente} className="bg-white">
                  <td className="px-4 py-2 border">{datoCliente.nombre}</td>
                  <td className="px-4 py-2 border">{datoCliente.email}</td>
                  <td className="px-4 py-2 border">{datoCliente.telefono}</td>
                  <td className="px-4 py-2 border">{datoCliente.direccion}</td>
                  <td className="px-4 py-2 border">
                    {new Date(datoCliente.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="submit"
            className="w-40 mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Generar pdf
          </button>
        </div>

        <div className="container mt-6 mb-6">
          <h2 className="text-3xl font-bold mb-4">
            Reporte Informacion de Colaboradores
          </h2>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border text-left">
                  Nombre Colaborador
                </th>
                <th className="px-4 py-2 border text-left">
                  Correo Electronico
                </th>
                <th className="px-4 py-2 border text-left">Telefono</th>
                <th className="px-4 py-2 border text-left">Dirección</th>
                <th className="px-4 py-2 border text-left">
                  Fecha de registro
                </th>
              </tr>
            </thead>
            <tbody>
              {colaboradoresArray.map((datoCliente) => (
                <tr key={datoCliente.id_cliente} className="bg-white">
                  <td className="px-4 py-2 border">{datoCliente.nombre}</td>
                  <td className="px-4 py-2 border">{datoCliente.email}</td>
                  <td className="px-4 py-2 border">{datoCliente.telefono}</td>
                  <td className="px-4 py-2 border">{datoCliente.direccion}</td>
                  <td className="px-4 py-2 border">
                    {new Date(datoCliente.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="submit"
            className="w-40 mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Generar pdf
          </button>
        </div>
      </main>
    </>
  );
}
