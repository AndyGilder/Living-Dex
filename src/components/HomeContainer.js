import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList } from '../actions';

function HomeContainer() {
  const pokemonListState = useSelector((state) => state.pokemonListReducer);
  const dispatch = useDispatch();

  const formatPokemonName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  useEffect(() => {
    dispatch(fetchPokemonList);
  }, [dispatch]);

  return (
    <div>
      {
        pokemonListState.pokemonList.map((pokemon) => {
          return (
            <div key={pokemon.id}>
              <div>{ formatPokemonName(pokemon.name) }</div>
              <img src={pokemon.sprites.other.home.front_default} height="40" width="40" loading="lazy" alt={formatPokemonName(pokemon.name)} title={formatPokemonName(pokemon.name)}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default HomeContainer