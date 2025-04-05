"use client";
import { useState, useEffect } from "react";
import clientesImport from "../../../db/data.json";
import Link from "next/link";

interface traerClientes {
  id: number;
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
export default function Clientes() {
  const [clientesArray, setClientesArray] = useState<traerClientes[]>([]);

  useEffect(() => {
    const fetchClientes = async () => {
      const clientes = await getClientes();
      setClientesArray(clientes);
    };
    fetchClientes();
  }, []);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const handleForm = async (formData: any) => {
    const data = {...formData, contraseña: "password" };
    const res = await fetch("http://localhost:5000/usuarios/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const data = await res.json();
      setClientesArray((prev) => [...prev, data]);
      alert("Usuario creado correctamente");
    } else {
      alert("Error al crear el usuario");
    }
  };


  const handleDelete = async (id_cliente: number) => {
    const res = await fetch(
      `http://localhost:5000/usuarios/${id_cliente}`,
      {
        method: "DELETE",
      }
    );
    if (res.ok) {
      setClientesArray((prev) =>
        prev.filter((cliente) => cliente.id !== id_cliente)
      );
      alert("Usuario eliminado correctamente");
    } else {
      alert("Error al eliminar el usuario");
    }
  }

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
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-withe-700 font-medium">
                Correo Electronico
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Digite correo electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* <div>
              <label className="block text-withe-700 font-medium">
                Telefono
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Digite numero de telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-withe-700 font-medium">
                Direccion
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Digite la direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div> */}
            <button
              onClick={() => {
                //check that the values are correct and not empty
                if (
                  nombre === "" ||
                  email === ""
                ) {
                  alert("Por favor complete todos los campos");
                  return;
                }
                const formData = {
                  nombre: nombre,
                  email: email,
                //   telefono: telefono,
                //   direccion: direccion,
                };
                handleForm(formData);
              }}
              type="submit"
              className="w-40 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
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
                <th className="px-4 py-2 border text-left">
                  Correo Electronico
                </th>
                <th className="px-4 py-2 border text-left">Telefono</th>
                <th className="px-4 py-2 border text-left">Dirección</th>
                <th className="px-4 py-2 border text-left">
                  Fecha de registro
                </th>
                <th className="px-4 py-2 border text-left">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {clientesArray.map((datoCliente) => (
                <tr key={datoCliente.id} className="bg-white">
                  <td className="px-4 py-2 border">{datoCliente.nombre}</td>
                  <td className="px-4 py-2 border">{datoCliente.email}</td>
                  <td className="px-4 py-2 border">{datoCliente.telefono}</td>
                  <td className="px-4 py-2 border">{datoCliente.direccion}</td>
                  <td className="px-4 py-2 border">
                    {new Date(datoCliente.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border ">
                    <button
                      type="button"
                      className="w-20 mt-1 bg-yellow-500 text-white py-1 rounded-lg hover:bg-yellow-600 transition"
                    >
                       <Link href={`editar/${datoCliente.id}`}>Editar</Link>
                    </button>
                    <button
                      type="button"
                      className="w-20 mt-1 bg-red-500 text-white py-1 rounded-lg hover:bg-red-600 transition"
                      onClick={() => handleDelete(datoCliente.id)}
                    >
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
