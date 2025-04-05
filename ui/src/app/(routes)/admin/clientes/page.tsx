
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
            <h1>Registrar nuevos Clientes</h1>
            <form className="space-y-4" autoComplete="off" autoCapitalize="off">
                <div>
                    <label className="block text-withe-700 font-medium">Nombre</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Digite nombre completo"
                    />
                </div>
                <div>
                    <label className="block text-withe-700 font-medium">Correo Electronico</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Digite correo electronico"
                    />
                </div>
                <div>
                    <label className="block text-withe-700 font-medium">Telefono</label>
                    <input
                        type="number"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Digite numero de telefono"
                    />
                </div>
                <div>
                    <label className="block text-withe-700 font-medium">Direccion</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Digite la direccion"
                    />
                </div>
                <button
                    type="submit"
                    className="w-40 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                    Registrar
                </button>
            </form>
        </div>

        <div className="container mt-6 mb-6">
            <h2 className="text-3xl font-bold mb-4">Editar/Eliminar usuarios</h2>

            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border text-left">Nombre Personal</th>
                        <th className="px-4 py-2 border text-left">Correo Electronico</th>
                        <th className="px-4 py-2 border text-left">Telefono</th>
                        <th className="px-4 py-2 border text-left">Dirección</th>
                        <th className="px-4 py-2 border text-left">Fecha de registro</th>
                        <th className="px-4 py-2 border text-left">Opciones</th>

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
                        <td className="px-4 py-2 border ">
                        <button
                            type="button"
                            className="w-20 mt-1 bg-yellow-500 text-white py-1 rounded-lg hover:bg-yellow-600 transition">
                            Editar
                        </button>
                        <button
                            type="button"
                            className="w-20 mt-1 bg-red-500 text-white py-1 rounded-lg hover:bg-red-600 transition">
                            Eliminar
                        </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>


      </main>
      </>
      
    );
  }
  