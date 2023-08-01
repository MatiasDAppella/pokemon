const router = require('express').Router();

// Routers import
const pokemonsRouter = require('./pokemonsRouter');
const typesRouter = require('./typesRouter');
const pokeballRouter = require('./pokeballRouter');
const imageRouter = require('./imageRouter');

// Routers config
router.use('/pokemons', pokemonsRouter);
router.use('/types', typesRouter);
router.use('/pokeball', pokeballRouter);
router.use('/image', imageRouter);

module.exports = router;