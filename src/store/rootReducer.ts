import { combineReducers } from 'redux';
import { iTuneReducer } from './itune/reducer';
import { reducer as itune } from './ituneX';
import pokemonReducer from './pokemon/PokemonReducer';

export const rootReducer = combineReducers({
  itune,
  pokemon: pokemonReducer,
  itunes: iTuneReducer,
});
