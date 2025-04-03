"use client"; 
import { useState, useEffect } from "react";
import productos from "../../../db/data.json";

// Definir la interfaz para los productos según tu JSON
interface Product {
  id_producto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  fecha_creacion: string;
}

export default function ProductosPagina(){

  const [products] = useState<Product[]>(productos.productos); // Accedemos a la propiedad 'productos' del JSON

  return(
    <main>
    <div className="container mx-auto m-6">
      <h2 className="text-3xl font-bold mb-4">Productos</h2>
      
      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id_producto} className="border p-4 rounded-lg shadow-lg">
            {/* Aquí puedes agregar una imagen si la tienes */}
            <h3 className="text-lg font-semibold">{product.nombre}</h3>
            <p className="text-gray-600">{product.descripcion}</p>
            <p className="text-gray-800 font-bold">${product.precio.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
            <p className="text-xs text-gray-400">Fecha de creación: {new Date(product.fecha_creacion).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="container mx-auto m-6">
      <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum placeat cupiditate, odit nesciunt, id ipsum maiores possimus facilis pariatur explicabo earum dolores deleniti deserunt, exercitationem ullam repudiandae nulla unde natus!</p>
        
    </div>
    
    </main>
  )
}