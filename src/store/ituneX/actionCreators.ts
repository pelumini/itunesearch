import axios from 'axios';
import { ActionTypes } from './actionTypes';
import { ITuneSearchResponse } from './types';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const TOKEN_URL = `${BASE_URL}posts`;

export const getITune =
  (): ((dispatch: any) => Promise<void>) => async (dispatch) => {
    try {
      dispatch({ type: ActionTypes.ITUNE_SEARCH_REQUEST });
      const { data } = await axios.get<ITuneSearchResponse>(TOKEN_URL);
      dispatch({
        type: ActionTypes.ITUNE_SEARCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.ITUNE_SEARCH_FAILED,
        payload: error,
      });
    }
  };
