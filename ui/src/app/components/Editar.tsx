"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface User {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
  createdAt: string;
}

export default function Editar({ user }: { user: User }) {
  const router = useRouter();
  const [nombre, setNombre] = useState(user.nombre);
  const [email, setEmail] = useState(user.email);
  const [telefono, setTelefono] = useState(user.telefono);
  const [direccion, setDireccion] = useState(user.direccion);

  const handleForm = async (formData: any) => {
    const res = await fetch("http://localhost:5000/usuarios", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Usuario actualizado correctamente");
      router.back();
    } else {
      alert("Error al actualizar el usuario");
    }
  };

  return (
    <main>
      {/* <div className="container mb-6">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border text-left">
                {user && user.nombre}
              </th>
            </tr>
          </thead>
        </table>
      </div> */}

      <div className="container">
        <h2 className="text-3xl font-bold mb-4">
          Editar su informacion de usuario
        </h2>

        <form className="space-y-4" autoComplete="off">
          <div>
            <label className="block text-withe-700 font-medium">Nombre</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Nombre de Personal"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-withe-700 font-medium">
              Correo electronico
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Correo Electronico de usuario"
              disabled
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-withe-700 font-medium">Telefono</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Telefono de usuario"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-withe-700 font-medium">
              Dirección
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Direccion de usuario"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              const formData = {
                nombre: nombre,
                email: email,
                telefono: telefono,
                direccion: direccion,
                id: user.id,
              };
              handleForm(formData);
            }}
            type="submit"
            className=" bg-green-600 text-white py-2 px-2 rounded-lg hover:bg-green-700 transition"
          >
            Actualizar datos
          </button>
        </form>
      </div>
    </main>
  );
}
