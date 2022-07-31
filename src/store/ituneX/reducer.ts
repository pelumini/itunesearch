/* eslint-disable default-param-last */
/* eslint-disable import/no-cycle */
import { AxiosError } from 'axios';
import { Reducer } from 'redux';
import { ActionTypes } from './actionTypes';
import { ITune, ITuneSearchActionsType } from './types';

interface IITuneSearchState {
  posts: ITune[];
  error: AxiosError | null;
}

const initialState: IITuneSearchState = {
  posts: [],
  error: null,
};

export const reducer: Reducer<IITuneSearchState, ITuneSearchActionsType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.ITUNE_SEARCH_REQUEST: {
      return {
        ...state,
        error: null,
        success: false,
      };
    }
    case ActionTypes.ITUNE_SEARCH_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
      };
    case ActionTypes.ITUNE_SEARCH_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
