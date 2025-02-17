export default function Clientes() {
  const clientes = [
    { idUsuario: 1, idPersona: 116500405, nombre: "David", apellido1: "Zamora", apellido2: "Perez" },
    { idUsuario: 2, idPersona: 158700678, nombre: "Edwin", apellido1: "López", apellido2: "Fernández" },
    { idUsuario: 3, idPersona: 145687987, nombre: "Carlos", apellido1: "Sanchez", apellido2: "Coen" },
    { idUsuario: 4, idPersona: 195246875, nombre: "Daniel", apellido1: "Perez", apellido2: "Rodríguez" }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Pantalla Clientes</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID Usuario</th>
              <th className="border p-2">ID Persona</th>
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Apellido 1</th>
              <th className="border p-2">Apellido 2</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.idUsuario} className="hover:bg-gray-100">
                <td className="border p-2 text-center">{cliente.idUsuario}</td>
                <td className="border p-2 text-center">{cliente.idPersona}</td>
                <td className="border p-2">{cliente.nombre}</td>
                <td className="border p-2">{cliente.apellido1}</td>
                <td className="border p-2">{cliente.apellido2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
