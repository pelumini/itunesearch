import axios from 'axios';
import { BASE_URL } from 'constants/url';
import { ActionTypes } from './actionTypes';
import { ITokenRequest, ITokenResponse } from './types';

const TOKEN_URL = `${BASE_URL}auth/jwt/create/`;
const config = {
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
};

export const getToken =
  ({ email, password }: ITokenRequest): ((dispatch: any) => Promise<void>) =>
  async (dispatch) => {
    const body = JSON.stringify({
      email,
      password,
    });
    try {
      dispatch({ type: ActionTypes.TOKEN_REQUEST });
      const { data } = await axios.post<ITokenResponse>(
        TOKEN_URL,
        body,
        config
      );
      dispatch({
        type: ActionTypes.TOKEN_SUCCESS,
        payload: data,
      });
      // localStorage.setItem("accessToken", data.access);
      // localStorage.setItem("refreshToken", data.refresh);
    } catch (error) {
      dispatch({
        type: ActionTypes.TOKEN_FAILED,
        payload: error,
      });
    }
  };

export const logout =
  (): ((dispatch: any) => Promise<void>) => async (dispatch) => {
    try {
      dispatch({ type: ActionTypes.LOGOUT_REQUEST });
      dispatch({
        type: ActionTypes.LOGOUT_SUCCESS,
      });
      // localStorage.removeItem("accessToken");
      // localStorage.removeItem("refreshToken");
    } catch (error) {
      dispatch({
        type: ActionTypes.LOGOUT_FAILED,
        payload: error,
      });
    }
  };
