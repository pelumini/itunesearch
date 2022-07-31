import { AxiosError } from 'axios';
import { ActionTypes } from './actionTypes';

export interface ITune {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ITuneSearchRequest {
  searchTerm: string;
}

export interface ITuneSearchResponse {
  posts: ITune[];
}

export interface IActionITuneSearchRequest {
  type: ActionTypes.ITUNE_SEARCH_REQUEST;
}

export interface IActionITuneSearchSuccess {
  type: ActionTypes.ITUNE_SEARCH_SUCCESS;
  payload: ITuneSearchResponse;
}

export interface IActionITuneSearchFailed {
  type: ActionTypes.ITUNE_SEARCH_FAILED;
  payload: AxiosError;
}

export type ITuneSearchActionsType =
  | IActionITuneSearchRequest
  | IActionITuneSearchSuccess
  | IActionITuneSearchFailed;
