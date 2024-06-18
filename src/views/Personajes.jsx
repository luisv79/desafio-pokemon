import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [id, setId] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Función para obtener la lista de Pokémon
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        setPokemons(data.results); // Almacenamos los resultados en el estado
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    };

    fetchPokemons();
  }, []);

  const irAPersonajes = () => {
    if (id) {
      navigate(`/personajes/${id}`);
    } else {
      alert("Por favor, selecciona un Pokémon válido.");
    }
  };

  return (
    <div className="mt-5">
      <div className="container seleccion">
      <h1>Selecciona un Pokemón</h1>
      <select className="form-select selector" value={id} onChange={({ target }) => setId(target.value)}>
        <option value="">Pokémones</option>
        {pokemons.map((pokemon, index) => (
          <option key={index} value={index + 1}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button type="button" className="btn btn-success" onClick={irAPersonajes}>buscar</button>
     </div>
    </div>
  );
}
