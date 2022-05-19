import axios from 'axios';
import { getPokemonList } from '../endpoints';

export const fetchPokemonList = (dispatch, getState) => {
  dispatch({
    type: 'FETCH_POKEMON_LIST_REQUEST',
  });

  axios.get(getPokemonList)
    .then(response => {
      const results = response.data.results;

      let promisesArray = results.map(result => {
        return axios.get(result.url);
      });

      return Promise.all(promisesArray);
    })
    .then(data => {
      const pokemonList = [];

      data.forEach((pokemon) => {
        if (pokemon.data.is_default) {
          pokemonList.push(pokemon.data);
        }
      })

      return pokemonList;
    })
    .then((data) => {
      dispatch({
        type: 'FETCH_POKEMON_LIST_SUCCESS',
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: 'FETCH_POKEMON_LIST_FAILURE',
        error: error.message,
      })
    });
}