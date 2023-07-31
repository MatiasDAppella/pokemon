const router = require('express').Router();

// Routers import
const pokemonsRouter = require('./pokemonsRouter');
const typesRouter = require('./typesRouter');
const extraRouter = require('./extraRouter');

// Routers config
router.use('/pokemons', pokemonsRouter);
router.use('/types', typesRouter);
router.use('/extra', extraRouter);

module.exports = router;