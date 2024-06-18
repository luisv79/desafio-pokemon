import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Personaje() {
  const [pokemon, setPokemon] = useState(null); // Cambiamos el estado inicial a null
  const { id } = useParams();

  // Consumo de API
  const baseURL = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  const getPokemon = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error("Error fetching pokemon data:", error);
    }
  };

  useEffect(() => {
    getPokemon(baseURL);
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center pokemon-caracteristicas">
      <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
      <div className="pokemon-texto">
      <h3>Nombre: {pokemon.name}</h3>
      
      <ul>
        <li>
          <p>Habilidades:</p>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      </li>
      <li><p>Experiencia: {pokemon.base_experience}</p></li>
      <li><p>Altura: {pokemon.height}</p></li>
      <li><p>Peso: {pokemon.weight}</p></li>
      </ul>
      </div>
      </div>
     
      
    </div>
  );
}
