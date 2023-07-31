const { Pokemon, Type } = require('../db');
const axios = require('axios');

// Utilities import
const {
  extractMinData
} = require('./dataHandlers');

const dataReformat = (resultsArray) => {
  return resultsArray.map(pokemon => {
    const types = pokemon.types.map(pokemonType => pokemonType.name);
    return { ...pokemon.toJSON(), types: types }
  })
};

module.exports = {
  searchInPokeball: async (search) => {
    const name = search.toLowerCase()
    const results = await Pokemon.findAll({
      where: { name },
      attributes: ['id', 'name', 'image', 'apiid'],
      include: [{
        model: Type,
        attributes: ['name'],
        through: { attributes: [] },
        as: 'types'
      }]
    })

    return dataReformat(results)
  },

  searchInApi: async (search) => {
    const name = search.toLowerCase()
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${name}`

    return await axios
      .get(endpoint)
      .then(response => response.data)
      .then(data => extractMinData(data))
      .catch(() => undefined)
  }
};