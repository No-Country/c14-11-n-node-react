const { Router } = require('express');
const { getPopularMovies } = require('../handlers/popHandlers');

const router = Router()

router.get('/', getPopularMovies)




module.exports = router; 

