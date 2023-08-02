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