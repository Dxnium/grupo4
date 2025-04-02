


export default function Home() {
  return (

    <>

    <div className="buscador">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="/img/istockphoto.jpg" className="rounded float-start" alt="Imagen de productos" />
          </div>
          <div className="col">
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Buscar productos..." />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="container text-start poductos">
      
      <h1>Novedades...</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro dolorum consequatur repudiandae voluptate explic</p>
      
      <div className="row">
        <div className="col"><ProductCard/></div>
        <div className="col"><ProductCard/></div>
        <div className="col"><ProductCard/></div>
        <div className="col"><ProductCard/></div>
      </div>

      <div className="row">
        <div className="col"><ProductCard/></div>
        <div className="col"><ProductCard/></div>
        <div className="col"><ProductCard/></div>
        <div className="col"><ProductCard/></div>
      </div>

    </div>

    
    <div className="empresa">
      <div className="container">
          <h1>Sobre nosotros</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione reprehenderit totam laboriosam cumque odit dignissimos illum molestias atque vero quas quidem distinctio at enim esse explicabo, voluptas aut perferendis animi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem asperiores rerum necessitatibus officiis sequi illum, maiores laboriosam ad consequuntur quis earum nostrum vitae facilis veniam corporis quo quas. Atque, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reiciendis id ab qui repellat quas cum nihil consequuntur! Veritatis vitae facilis earum, voluptates explicabo consequuntur inventore nemo! Accusantium, dolorem accusamus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, consequatur eum id veniam rem aliquid molestias molestiae neque tempora deserunt dignissimos perspiciatis consectetur velit fuga nam! Quidem fugit reiciendis quo? est?</p>
          <p><a href="">Mas información</a></p>
          <img src="/img/istockphoto.jpg" className="img-fluid" alt="..."/>
      </div>
    </div>

    </>
    
  );
}

// Componente de Tarjeta de Producto
function ProductCard() {
  return (
    <div className="card" style={{ width: "100%" }}>
      <img src="/img/istockphoto.jpg" className="card-img-top" alt="..."/>  
      <div className="card-body">
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  );
}