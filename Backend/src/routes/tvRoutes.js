const { getTvHandler } = require('../handlers/tvHandlers');

const { Router } = require('express');
const tvRouter = Router()

//TRAER TV/SERIES POR GENERO ID
tvRouter.get('/genres/:id', getTvHandler)

module.exports = tvRouter;