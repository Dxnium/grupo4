

export default function Colaboradores() {
  return (

    <>
    
    <main>

      <div className="container">
          <h1>Registrar nuevos Colaboradores</h1>
          <form className="space-y-4" autoComplete="off" autoCapitalize="off">
              <div>
                  <label className="block text-withe-700 font-medium">Colaborador</label>
                  <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Digite nombre de colaborador"
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
          <h2 className="text-3xl font-bold mb-4">Editar/Eliminar colaboradores</h2>

          <table className="min-w-full table-auto border-collapse">
              <thead>
                  <tr>
                      <th className="px-4 py-2 border text-left">Nombre Colaborador</th>
                      <th className="px-4 py-2 border text-left">Correo Electronico</th>
                      <th className="px-4 py-2 border text-left">Telefono</th>
                      <th className="px-4 py-2 border text-left">Dirección</th>
                      <th className="px-4 py-2 border text-left">Fecha de registro</th>
                      <th className="px-4 py-2 border text-left">Opciones</th>

                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white">
                      <td className="px-4 py-2 border">User Default</td>
                      <td className="px-4 py-2 border">correoelectronico@gmail.com</td>
                      <td className="px-4 py-2 border">00000000</td>
                      <td className="px-4 py-2 border">En algún lugar por defecto</td>
                      <td className="px-4 py-2 border">00/00/0000</td>
                      <td className="px-4 py-2 border ">
                      <button
                          type="button"
                          className="w-20 m-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
                          Editar
                      </button>
                      <button
                          type="button"
                          className="w-20 m-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                          Eliminar
                      </button>
                      </td>
                  </tr>
                  <tr className="bg-gray-50">
                      <td className="px-4 py-2 border">User Default</td>
                      <td className="px-4 py-2 border">correoelectronico@gmail.com</td>
                      <td className="px-4 py-2 border">00000000</td>
                      <td className="px-4 py-2 border">En algún lugar por defecto</td>
                      <td className="px-4 py-2 border">00/00/0000</td>
                      <td className="px-4 py-2 border ">
                      <button
                          type="button"
                          className="w-20 m-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
                          Editar
                      </button>
                      <button
                          type="button"
                          className="w-20 m-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                          Eliminar
                      </button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>


    </main>
    </>
    
  );
}
