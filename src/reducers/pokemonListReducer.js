const initialState = {
  pokemonList: [],
  loading: false,
  error: null,
}

const pokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMON_LIST_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      }
    case 'FETCH_POKEMON_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        pokemonList: action.payload,
      }
    case 'FETCH_CARD_LIST_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error.errorMessage,
      }
    default:
      return state;
  }
}

export default pokemonListReducer;
