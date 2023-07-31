const { Type } = require('../db');
const axios = require('axios');

class typesController {
  getAll = async () => {
    let all = await Type.findAll({ attributes: ['id', 'name'] })
    if (all.length) return all
    
    return await this._chargeFromApiData()
  };

  _chargeFromApiData = async () => {
    const endpoint = "https://pokeapi.co/api/v2/type";
    
    let res = await axios
      .get(endpoint)
      .then(response => response.data.results)
      .catch(() => { throw new Error("No response from api") })

    while (res.length){
      const type = res.shift()
      await Type.create({
        name: type.name
      })
    }

    return await Type.findAll({ attributes: ['id', 'name'] })
  };
};

const types = new typesController();
module.exports = {
  types
};