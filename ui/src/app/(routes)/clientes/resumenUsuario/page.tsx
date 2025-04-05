

"use client";
import { useUserContext } from "@/app/context/UserContext";

 

export default function editarInformacionPage(){
    const { user }= useUserContext();
    
    return(
    <main>
        
        <div className="container mb-6">
            <h2 className="text-3xl font-bold mb-4">Resumen de informacion de usuario</h2>

            <table className="min-w-full table-auto border-collapse">
                <tbody>
                    <tr className="bg-white">
                        <th className="px-4 py-2 border text-left">Nombre</th>
                        <td className="px-4 py-2 border">{user?.nombre}</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <th className="px-4 py-2 border text-left">Correo Electronico</th>
                        <td className="px-4 py-2 border">{user?.email}</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <th className="px-4 py-2 border text-left">Telefono</th>
                        <td className="px-4 py-2 border">{user?.telefono}</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <th className="px-4 py-2 border text-left">Dirección</th>
                        <td className="px-4 py-2 border">{user?.direccion}</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <th className="px-4 py-2 border text-left">Fecha de registro</th>
                        <td className="px-4 py-2 border">{user?.createdAt}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    
    </main>
  )
}