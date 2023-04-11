import { useContext, useEffect } from 'react';
import './App.css';
import CartPokemon from './components/CartPokemon';
import Header from './components/Header';
import { PokemonsContext } from './context/PokemonsContext';

function App() {
  const value = useContext(PokemonsContext);
  const { isLoading, getPokemons, pokemons } = value;
  console.log(pokemons)

  useEffect(() => {
    getPokemons(0, 10);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="edge-main">
      <Header />
      { (isLoading === false) 
        ? 
      (<CartPokemon pokemonsLinst={ pokemons } />)
        :
      null
    }
    </div>
  );
}

export default App;
