import { useEffect, useState } from "react";
import { Generos } from "./components/Generos";
import { Marcas } from "./components/Marcas";
import { Categorias } from "./components/nav/Categorias";
import { Paises } from "./components/nav/Paises";
import { Nav } from "./components/nav/Nav";

function App() {
  const [products, setProducts] = useState([]);

  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Marcas />
      <Generos />
      <Categorias />
      <Paises />
      <Nav />
      <h1></h1>
      {products.map((product: any) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

export default App;
