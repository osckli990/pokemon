import Pokemon from "./components/Pokemon.jsx";
import pokemon from "./data/pokemon.json";

export const App = () => {
  return (
    <>
      <h1>Pokemon Project</h1>
      {pokemon.pokemons.map((pokemon) => {
        return (
          <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            category={pokemon.category}
          />
        );
      })}
    </>
  );
};
