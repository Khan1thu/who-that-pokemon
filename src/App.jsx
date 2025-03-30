import { useEffect, useState } from "react";

export default function App() {

  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState();
  const [score, setScore] = useState(0);

  const randomPokemon = Math.floor(Math.random() * 155) + 1;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`)
        .then(res => res.json())
        .then(data => setPokemon(data));
  }, [score])

  function handleChange(event) {
    setPokemonName(event.target.value.toLowerCase())
  }

  function handleSubmit(e){
    e.preventDefault();
    if(pokemonName === pokemon.name){
      setScore(prev => prev + 1)
      alert("Correct")
    }else{
      setScore(prev => prev - 1)
      alert("Incorrect, try again")
    }
  }

  return(
    <div className="container">
      <h1>Pokemon Guessing Game</h1>
      {pokemon.length == 0 ? "No pokemon" : <img className="pokemon-image" src={pokemon.sprites.front_default} alt="" />}
      <input type="text" value={pokemonName} onChange={handleChange} />
      <button className="enter" onClick={handleSubmit}>Enter</button>
      <h1>Score: {score}</h1>
    </div>
  )
}