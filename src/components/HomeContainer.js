import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonList } from '../actions';
import HomeBox from './HomeBox';
import './HomeContainer.scss';

function HomeContainer() {
  const pokemonListState = useSelector((state) => state.pokemonListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonList);
  }, [dispatch]);

  const renderHomeBoxes = (pokemon, index) => {
    // if (index > 0 && index % 30 === 0) {
    //   return (
    //     <div key={pokemon.id} className='box-separator'>
    //       <HomeBox pokemon={pokemon} />
    //     </div>
    //   )
    // }

    return <HomeBox key={pokemon.id} pokemon={pokemon} />
  }

  return (
    <div className='home-box-container'>
      {
        pokemonListState.pokemonList.map((pokemon, index) => {
          return (
            renderHomeBoxes(pokemon, index)
          )
        })
      }
    </div>
  )
}

export default HomeContainer