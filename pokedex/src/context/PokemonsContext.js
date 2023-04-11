import { createContext, useState } from 'react';

export const PokemonsContext = createContext();

function PokemonProvider({ children }) {
    const [pokemons, setPokemons] = useState('');
    const [isLoading, setIsLoading] = useState(true);    
    
// const pokemonsName = async (listPoke) => {
//     const namePokemon = await listPoke.map((pokemon) => pokemon.name)
//     return namePokemon
//   }
  
  const getPokemons = async (offset, limit) => {
        setIsLoading(true);
    try {
      const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
      const dataFetch = await fetch(url);
      const data = await dataFetch.json();
    //   console.log(data.results);
      const results = data.results;
    //   pokemonsName(results)
    setPokemons(results)
    return results;
    } catch (err) {
    } finally {
        setIsLoading(false);
    }
}

return (
    <PokemonsContext.Provider
        value={
            {
            pokemons,
            isLoading,
            setPokemons,
            setIsLoading,
            getPokemons
            }
        }
    >
        { children }
    </PokemonsContext.Provider>
  );
}

export default PokemonProvider
