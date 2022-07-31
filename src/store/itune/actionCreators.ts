import axios from 'axios';
import { Dispatch } from 'redux';
import { POKEMON_LOADING, POKEMON_FAIL, POKEMON_SUCCESS } from './actionTypes';
import { PokemonDispatchTypes } from './types';

export const GetPokemon =
  (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
      dispatch({
        type: POKEMON_LOADING,
      });

      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );

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
