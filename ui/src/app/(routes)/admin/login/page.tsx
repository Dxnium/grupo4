

export default function LoginAdmin() {
    return (
  
      <main>
  
  
      <div className="container">
        <h1 className="text-3xl font-semibold mb-6">Inicio de Sesion Administracion</h1>
  
        <form className="space-y-4" autoComplete="off" autoCapitalize="off">
          <div>
              <label className="block text-withe-700 font-medium">Usuario</label>
              <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Digite su nombre de usuario"
              />
          </div>
          <div>
              <label className="block text-withe-700 font-medium">Contraseña</label>
              <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Digite su contraseña"
              />
          </div>
          <button
            type="submit"
            className="w-40 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Registrar
          </button>
          </form>
  
      </div>
  
      </main>
      
    );
  }
  