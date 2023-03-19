import { useState, useEffect } from "react";

export const Marcas = () => {
  const [marcas, setMarcas] = useState<any[]>([]);

  const API_URL = "http://localhost:3001";
  const ENDPOINT = "marcas";

  const getMarcas = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setMarcas(data);
  };

  useEffect(() => {
    getMarcas();
  }, []);

  return (
    <div>
      <h2>Marcas</h2>
      <ul>
        {marcas.map((item) => (
          <li key={item.id}>
            <a href="">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
