const initialState = {
  pokemons: [],
  filtered: [],
  detail: {}
}

export const reducer = (state = initialState, action) => {
  switch (action.type){

    default:
      return { ...state };
  };
};