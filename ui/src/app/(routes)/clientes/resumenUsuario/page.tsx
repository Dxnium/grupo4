

"use client"; 


export default function editarInformacionPage(){
    
    return(
    <main>
        
        <div className="container mb-6">
            <h2 className="text-3xl font-bold mb-4">Resumen de informacion de usuario</h2>

            <table className="min-w-full table-auto border-collapse">
                <tbody>
                    <tr className="bg-white">
                        <th className="px-4 py-2 border text-left">Nombre usuario</th>
                        <td className="px-4 py-2 border">User Default</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <th className="px-4 py-2 border text-left">Nombre Personal</th>
                        <td className="px-4 py-2 border">Nombre Nombre Apellido Apellido</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <th className="px-4 py-2 border text-left">Correo Electronico</th>
                        <td className="px-4 py-2 border">correoelectronico@gmail.com</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <th className="px-4 py-2 border text-left">Telefono</th>
                        <td className="px-4 py-2 border">00000000</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <th className="px-4 py-2 border text-left">Dirección</th>
                        <td className="px-4 py-2 border">En algún lugar por defecto</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <th className="px-4 py-2 border text-left">Fecha de registro</th>
                        <td className="px-4 py-2 border">00/00/0000</td>
                    </tr>
                </tbody>
            </table>
        </div>

    
    </main>
  )
}