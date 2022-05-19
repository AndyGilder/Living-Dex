import { combineReducers } from '@reduxjs/toolkit';
import pokemonListReducer from './pokemonListReducer';

const rootReducer = combineReducers({
  pokemonListReducer,
});

export default rootReducer;
