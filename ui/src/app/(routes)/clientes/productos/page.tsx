import { Typography } from "@mui/material";

// Definir la interfaz para los productos según tu JSON
interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  createdAt: string;
}


const getProductos = async (): Promise<Product[]> => {
  try {
    const res: Response = await fetch('http://localhost:5000/productos');
    const data: Product[] = await res.json();
    return data;
  } catch (error: unknown) {
    console.error("Error fetching products:", error);
    return [];
  }
}
export default async function ProductosPagina(){

  // array products
  const products = await getProductos()

  return(
    <main>
    <div className="container mx-auto m-6">
      <h2 className="text-3xl font-bold mb-4">Productos</h2>
      
      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            {/* Aquí puedes agregar una imagen si la tienes */}
            <h3 className="text-lg font-semibold">{product.nombre}</h3>
            <p className="text-gray-600">{product.descripcion}</p>
            <p className="text-gray-800 font-bold">${product.precio.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
            <p className="text-xs text-gray-400">Fecha de creación: {new Date(product.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="container mx-auto m-6">
      <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
        <p>En <strong>ShopEasy</strong> nos dedicamos a ofrecer productos de alta calidad, combinando innovación, compromiso y atención personalizada. Nuestro objetivo es mejorar la vida de nuestros clientes a través de soluciones tecnológicas accesibles, construyendo relaciones basadas en la confianza, la transparencia y el servicio excepcional.</p>
    </div>
    
    </main>
  )
}