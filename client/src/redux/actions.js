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

export const createTypesInDatabase = () => {
  const endpoint = `http://localhost:3001/types`;

  return (dispatch) => fetch(endpoint)
    .then(res => res.json())
    .then(data => dispatch({
      type: type.CREATE_TYPES_IN_DATABASE,
      payload: data
    })).catch()
}

export const toggleDisplay = (toggle) => ({
  type: toggle
});

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

// detail
export const getDetail = (id) => {
  const endpoint = `http://localhost:3001/pokemons/${id}`;

  return (dispatch) => fetch(endpoint)
    .then(res => res.json())
    .then(data => dispatch({
      type: type.GET_DETAIL,
      payload: data
    })).catch()
};

export const cleanDetail = () => ({
  type: type.CLEAN_DETAIL
});

// catch/release from pokeball
export const catchInPokeball = (pokemon) => {
  const endpoint = `http://localhost:3001/pokemons`;
  const requestConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pokemon)
  }

  return (dispatch) => fetch(endpoint, requestConfig)
    .then(res => res.json())
    .then(data => dispatch({
      type: type.CATCH_POKEMON,
      payload: data
    })).catch()
};

export const releasePokemon = (id) => {
  const endpoint = `http://localhost:3001/pokeball/${id}`;
  const requestConfig = {
    method: 'DELETE'
  }

  return (dispatch) => fetch(endpoint, requestConfig)
    .then(res => res.json())
    .then(data => dispatch({
      type: type.RELEASE_POKEMON,
      payload: data
    })).catch()
};