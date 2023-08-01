const { Pokemon, Type } = require('../db');
const axios = require('axios');

// Utilities import
const {
  extractDetailedData
} = require('./dataHandlers');

const dataReformat = (resultsArray) => {
  return resultsArray.map(pokemon => {
    const types = pokemon.types.map(pokemonType => pokemonType.name);
    return { ...pokemon.toJSON(), types: types }
  })
};

module.exports = {
  getFromPokeball: async (id) => {
    const pokemon = await Pokemon.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [{
        model: Type,
        attributes: ['name'],
        through: { attributes: [] },
        as: 'types'
      }]
    })
    // Ahora quiero mapear mi array "types" para que se vea mas limpio.
    const types = pokemon.types.map(pokemonType => pokemonType.name);
    return { ...pokemon.toJSON(), types: types }
  },

  getAllFromPokeball: async () => {
    const results = await Pokemon.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [{
        model: Type,
        attributes: ['name'],
        through: { attributes: [] },
        as: 'types'
      }]
    })

    return dataReformat(results)
  },

  searchInPokeball: async (search) => {
    const name = search.toLowerCase()
    const results = await Pokemon.findAll({
      where: { name },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
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
      .then(data => extractDetailedData(data))
      .catch(() => undefined)
  }
};