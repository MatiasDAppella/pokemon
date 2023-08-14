/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: "pikachu",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  health: 35,
  stroke: 55,
  defense: 40,
  speed: 90,
  height: 4,
  weight: 60,
  apiid: "25",
  types: [
    "electric"
  ]
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));


  // ---------------------------------------------
  // GET http://localhost:3001/pokemons/:idPokemon
  describe('GET /pokemons/:idPokemon', () => {
    let response;

    it('should get 200', async () => {
      response = await agent.get('/pokemons/150').expect(200)
    });

    it('response body should be an object', () =>
      expect(response.body).to.be.an('object')
    );

    it('should not contain "id" property', () => {
      expect(response.body).to.not.have.own.property('id')
    });

    it('should contain "apiid" propery', () => {
      expect(response.body).to.have.own.property('apiid')
    });
  });


  // -----------------------------------------
  // GET http://localhost:3001/pokemons/name?=
  describe('GET /pokemons/name?search=pikachu', () => {
    let response;
    
    it('should get 200', async () =>
      response = await agent.get('/pokemons/name?search=pikachu').expect(200)
    );

    it('response body should be an array', () =>
      expect(response.body).to.be.an('array')
    );

    it('all elements should contain a property "name" equals to "pikachu"', () =>
      response.body.every(pokemon => expect(pokemon).to.haveOwnProperty('name').equal('pikachu'))
    );
  });
});