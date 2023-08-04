import * as type from './types';
import {  } from '../constants';

// render
export const renderFirstPokemons = () => {
  const endpoint = `http://localhost:3001/pokemons`;

  return (dispatch) => fetch(endpoint)
    .then(res => res.json())
    .then(data => dispatch({
      type: type.RENDER_FIRST_POKEMONS,
      payload: data
    })).catch()
};

// sort methods
export const sortAscByParam = (param) => ({
  type: type.SORT_ASC_BY_PARAMS,
  payload: param
});

export const sortDesByParam = (param) => ({
  type: type.SORT_DES_BY_PARAMS,
  payload: param
});

// search
export const getSearch = (name) => {
  const endpoint = `http://localhost:3001/pokemons/name?search=${name}`;

  return (dispatch) => fetch(endpoint)
    .then(res => res.json())
    .then(data => dispatch({
      type: type.GET_SEARCH,
      payload: data
    })).catch()
};

export const toggleDisplay = (toggle) => ({
  type: toggle
});