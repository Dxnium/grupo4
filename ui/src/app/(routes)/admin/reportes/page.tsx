"use client"; 
import { useState, useEffect } from "react";
import clientesImport from "../../../db/data.json";

interface traerClientes {
    id_cliente: number;
    nombre: string;
    correo: string;
    telefono: string;
    direccion: string;
    fecha_registro: string;
 
  }

export default function Clientes() {
    const [clientesArray] = useState<traerClientes[]>(clientesImport.clientes); // Accedemos a la propiedad 'productos' del JSON

  return (

    <>
    
    <main>

        <div className="container">
            <h1>Reportes</h1>
        </div>
        <div className="container mt-6 mb-6">
            <h2 className="text-3xl font-bold mb-4">Reporte Informacion de Clientes</h2>
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border text-left">Nombre</th>
                        <th className="px-4 py-2 border text-left">Correo Electronico</th>
                        <th className="px-4 py-2 border text-left">Telefono</th>
                        <th className="px-4 py-2 border text-left">Dirección</th>
                        <th className="px-4 py-2 border text-left">Fecha de registro</th>
                    </tr>
                </thead>
                <tbody>

                {clientesArray.map((datoCliente) => (
                    <tr key={datoCliente.id_cliente} className="bg-white">
                        <td className="px-4 py-2 border">{datoCliente.nombre}</td>
                        <td className="px-4 py-2 border">{datoCliente.correo}</td>
                        <td className="px-4 py-2 border">{datoCliente.telefono}</td>
                        <td className="px-4 py-2 border">{datoCliente.direccion}</td>
                        <td className="px-4 py-2 border">{new Date(datoCliente.fecha_registro).toLocaleDateString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button
                type="submit"
                className="w-40 mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Generar pdf
            </button>
        </div>

        <div className="container mt-6 mb-6">
            <h2 className="text-3xl font-bold mb-4">Reporte Informacion de Colaboradores</h2>
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border text-left">Nombre Colaborador</th>
                        <th className="px-4 py-2 border text-left">Correo Electronico</th>
                        <th className="px-4 py-2 border text-left">Telefono</th>
                        <th className="px-4 py-2 border text-left">Dirección</th>
                        <th className="px-4 py-2 border text-left">Fecha de registro</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white">
                        <td className="px-4 py-2 border">Name Default</td>
                        <td className="px-4 py-2 border">correoelectronico@gmail.com</td>
                        <td className="px-4 py-2 border">00000000</td>
                        <td className="px-4 py-2 border">En algún lugar por defecto</td>
                        <td className="px-4 py-2 border">00/00/0000</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="px-4 py-2 border">Name Default</td>
                        <td className="px-4 py-2 border">correoelectronico@gmail.com</td>
                        <td className="px-4 py-2 border">00000000</td>
                        <td className="px-4 py-2 border">En algún lugar por defecto</td>
                        <td className="px-4 py-2 border">00/00/0000</td>
                    </tr>
                </tbody>
            </table>
            <button
            type="submit"
            className="w-40 mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Generar pdf
            </button>
        </div>

    </main>
    </>
    
  );
}
