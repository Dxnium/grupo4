

"use client"; 


export default function editarInformacionPage(){
    
    return(
    <main>
        
        <div className="container mb-6">
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 border text-left">User default</th>
                    </tr>
                </thead>
            </table>
        </div>

        <div className="container">
            <h2 className="text-3xl font-bold mb-4">Editar su informacion de usuario</h2>

            <form className="space-y-4" autoComplete="off">
            <div>
                <label className="block text-withe-700 font-medium">Nombre</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Nombre de Personal"
                />
            </div>
            <div>
                <label className="block text-withe-700 font-medium">Correo electronico</label>
                <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Correo Electronico de usuario"
                />
            </div>
            <div>
                <label className="block text-withe-700 font-medium">Telefono</label>
                <input
                    type="number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Telefono de usuario"
                />
            </div>
            <div>
                <label className="block text-withe-700 font-medium">Dirección</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Direccion de usuario"
                />
            </div>

            <button
            type="submit"
            className=" bg-green-600 text-white py-2 px-2 rounded-lg hover:bg-green-700 transition">
            Actualizar datos
            </button>
        </form>
        </div>
    
    </main>
  )
}