const axios = require('axios');

module.exports = {
  getRandomImage: async () => {
    const random = Math.floor(Math.random() * 1001);
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${random}`;
  
    return await axios
      .get(endpoint)
      .then(response => response.data.sprites.other['official-artwork'].front_default)
      .catch(() => { throw new Error("No response from api") })
  }
};

