import * as type from './types';

export const renderFirstPokemons = () => {
  const endpoint = `http://localhost:3001/pokemons`;

  return (dispatch) => fetch(endpoint)
    .then(res => res.json())
    .then(data => dispatch({
      type: type.RENDER_FIRST_POKEMONS,
      payload: data
    })).catch()
};

export const sortAscByParam = (param) => ({
  type: type.SORT_ASC_BY_PARAMS,
  payload: param
});

export const sortDesByParam = (param) => ({
  type: type.SORT_DES_BY_PARAMS,
  payload: param
});