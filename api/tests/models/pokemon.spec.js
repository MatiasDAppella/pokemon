const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');
const pokemonWithoutApiid = {
  name: "pikachu",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  health: 35,
  stroke: 55,
  defense: 40,
  speed: 90,
  height: 4,
  weight: 60,
}

// ===============================================================
// pokemon model -------------------------------------------------
describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));

    // id --------------------------------------------------------
    describe('id', () => {
      it('should generate an uuid', async () => {
        let result = await Pokemon.create(pokemonWithoutApiid)
        expect(result.dataValues).to.have.own.property('id')
      });
    });

    // name ------------------------------------------------------
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });

      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
    });

    // image -----------------------------------------------------
    describe('image', () => {
      it('should throw an error if image is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid image')))
          .catch(() => done());
      });

      it('should work when its a valid image', () => {
        Pokemon.create({ image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' });
      });
    });

    // health ----------------------------------------------------
    describe('health', () => {
      it('should throw an error if health is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid health')))
          .catch(() => done());
      });

      it('should throw an error if health is a string value', (done) => {
        Pokemon.create({ health: "100" })
          .then(() => done(new Error('It requires a integer value')))
          .catch(() => done());
      });

      it('should work when its a valid health', () => {
        Pokemon.create({ health: 100 });
      });
    });

    // stroke ----------------------------------------------------
    describe('stroke', () => {
      it('should throw an error if stroke is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid stroke')))
          .catch(() => done());
      });

      it('should throw an error if stroke is a string value', (done) => {
        Pokemon.create({ stroke: "100" })
          .then(() => done(new Error('It requires a integer value')))
          .catch(() => done());
      });

      it('should work when its a valid stroke', () => {
        Pokemon.create({ stroke: 100 });
      });
    });

    // defense ---------------------------------------------------
    describe('defense', () => {
      it('should throw an error if defense is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid defense')))
          .catch(() => done());
      });

      it('should throw an error if defense is a string value', (done) => {
        Pokemon.create({ defense: "100" })
          .then(() => done(new Error('It requires a integer value')))
          .catch(() => done());
      });

      it('should work when its a valid defense', () => {
        Pokemon.create({ defense: 100 });
      });
    });

    // speed -----------------------------------------------------
    describe('speed', () => {
      it('should throw an error if speed is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid speed')))
          .catch(() => done());
      });

      it('should throw an error if speed is a string value', (done) => {
        Pokemon.create({ speed: "100" })
          .then(() => done(new Error('It requires a integer value')))
          .catch(() => done());
      });

      it('should work when its a valid speed', () => {
        Pokemon.create({ speed: 100 });
      });
    });

    // height ----------------------------------------------------
    describe('height', () => {
      it('should throw an error if height is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid height')))
          .catch(() => done());
      });

      it('should throw an error if height is a string value', (done) => {
        Pokemon.create({ height: "100" })
          .then(() => done(new Error('It requires a integer value')))
          .catch(() => done());
      });

      it('should work when its a valid height', () => {
        Pokemon.create({ height: 100 });
      });
    });

    // weight ----------------------------------------------------
    describe('weight', () => {
      it('should throw an error if weight is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid weight')))
          .catch(() => done());
      });

      it('should throw an error if weight is a string value', (done) => {
        Pokemon.create({ weight: "100" })
          .then(() => done(new Error('It requires a integer value')))
          .catch(() => done());
      });

      it('should work when its a valid weight', () => {
        Pokemon.create({ weight: 100 });
      });
    });

    // apiid -----------------------------------------------------
    describe('apiid', () => {
      it('should work if apiid is null', (done) => {
        Pokemon.create(pokemonWithoutApiid)
          .then(() => done())
          .catch(() => done());
      });

      it('should throw an error if health is a integer value', (done) => {
        Pokemon.create({ health: 100 })
          .then(() => done(new Error('It requires a string value')))
          .catch(() => done());
      });

      it('should work when its a valid apiid', () => {
        Pokemon.create({ apiid: "25" });
      });
    });
  });
});
