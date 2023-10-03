import * as type from './types';
const domain = "https://pokemon-api-yo6q.onrender.com";

// render
export const renderFirstPokemons = () => {
  const endpoint = `${domain}/pokemons`;

  return (dispatch) => fetch(endpoint)
    .then(res => res.json())
    .then(data => dispatch({
      type: type.RENDER_FIRST_POKEMONS,
      payload: data
    })).catch()
};

export const createTypesInDatabase = () => {
  const endpoint = `${domain}/types`;

  return (dispatch) => fetch(endpoint)
    .then(res => res.json())
    .then(data => dispatch({
      type: type.CREATE_TYPES_IN_DATABASE,
      payload: data
    })).catch()
}

// search
export const getSearch = (name) => {
  const endpoint = `${domain}/pokemons/name?search=${name}`;
  
  return (dispatch) => fetch(endpoint)
  .then(res => {
    if (!res.ok) return null
    else return res.json()
  })
  .then(data => {
    if (data.length > 0) return dispatch({
      type: type.GET_SEARCH,
      payload: data
    })
    else return dispatch({
      type: type.ADD_ERROR_MESSAGE,
      payload: "No results"
    })
  }).catch()
};

export const addErrorMessage = (message) => ({
  type: type.ADD_ERROR_MESSAGE,
  payload: message
})

export const removeErrorMessage = () => ({
  type: type.REMOVE_ERROR_MESSAGE
});

// detail
export const getDetail = (id) => {
  const endpoint = `${domain}/pokemons/${id}`;
  
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
  const endpoint = `${domain}/pokemons`;
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
  const endpoint = `${domain}/pokeball/${id}`;
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
  
  // filters
export const toggleAll = () => ({
  type: type.TOGGLE_ALL
});

export const toggleSearch = () => ({
  type: type.TOGGLE_SEARCH
});

export const toggleCatched = () => ({
  type: type.TOGGLE_CATCHED
});

export const toggleFree = () => ({
  type: type.TOGGLE_FREE
});

// sort methods
export const sortAscByStroke = () => ({
  type: type.SORT_ASC_BY_STROKE
});

export const sortDesByStroke = () => ({
  type: type.SORT_DES_BY_STROKE
});

export const sortAscByDefense = () => ({
  type: type.SORT_ASC_BY_DEFENSE
});

export const sortDesByDefense = () => ({
  type: type.SORT_DES_BY_DEFENSE
});

export const sortAscByHealth = () => ({
  type: type.SORT_ASC_BY_HEALTH
});

export const sortDesByHealth = () => ({
  type: type.SORT_DES_BY_HEALTH
});

export const sortAscBySpeed = () => ({
  type: type.SORT_ASC_BY_SPEED
});

export const sortDesBySpeed = () => ({
  type: type.SORT_DES_BY_SPEED
});

// aphabetically
export const sortAscAlpha = () => ({
  type: type.SORT_ASC_ALPHABETICALLY
});

export const sortDesAlpha = () => ({
  type: type.SORT_DES_ALPHABETICALLY
});
