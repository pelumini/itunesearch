import { Dispatch } from 'redux';
import { client } from 'utils/api';
import { POKEMON_LOADING, POKEMON_FAIL, POKEMON_SUCCESS } from './actionTypes';
import { PokemonDispatchTypes } from './types';

export const GetPokemon =
  (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
      dispatch({
        type: POKEMON_LOADING,
      });
      const res = await client.get(`${pokemon}`);
      dispatch({
        type: POKEMON_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: POKEMON_FAIL,
      });
    }
  };
