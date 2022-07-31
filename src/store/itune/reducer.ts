/* eslint-disable default-param-last */
import { POKEMON_LOADING, POKEMON_FAIL, POKEMON_SUCCESS } from './actionTypes';
import { PokemonDispatchTypes, PokemonType } from './types';

interface DefaultStateI {
  loading: boolean;
  pokemon?: PokemonType;
}

const defaultState: DefaultStateI = {
  loading: false,
};

export const iTuneReducer = (
  state: DefaultStateI = defaultState,
  action: PokemonDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case POKEMON_FAIL:
      return {
        loading: false,
      };
    case POKEMON_LOADING:
      return {
        loading: true,
      };
    case POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};
