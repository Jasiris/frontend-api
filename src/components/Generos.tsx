import { useState, useEffect } from "react";

export const Generos = () => {
  const [generos, setGeneros] = useState<any[]>([]);

  const API_URL = "http://localhost:3001";
  const ENDPOINT = "generos";

  const getGeneros = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setGeneros(data);
  };

  useEffect(() => {
    getGeneros();
  }, []);

  return (
    <div>
      <h2>Generos</h2>
      <ul>
        {generos.map((item) => (
          <li key={item.id}>
            <a href="">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
