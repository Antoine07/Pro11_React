import { ADD_WORD, DATA_LOADED, URL_DATA, LOADING_DATA } from '../constants/actions';

import axios from '../node_modules/axios';

export const addWord = payload => {

  return {
    type: ADD_WORD, payload
  }
}

export const loading = payload => {
  return {
    type: LOADING_DATA, payload
  }
}

export const getItem = item => {
  return dispatch => {
    return axios.get(`${URL_DATA}/${item}`)
      .then(({ data }) => {
        dispatch(loading({ loading: true }));
        dispatch({ type: 'DATA_CUISINE', payload: data });
    });
  };
}

export const search = (word) => async (dispatch, getState) => {
  try {
    dispatch(loading({ loading: true }));
    const response = await fetch(`${URL_DATA}`);
    const json = await response.json();
    dispatch({ type: 'DATA_CUISINE', payload: json });
  } catch (error) {
    throw error;
  }
};
