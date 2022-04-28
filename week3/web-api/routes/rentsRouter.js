const express = require('express')
const {getRent,getRents,deleteRent} = require('../controllers/rentsRouter')

const rentsRouter = express.Router();

rentsRouter.get('/',getRents)
rentsRouter.get('/:id',getRent)
rentsRouter.delete('/:delete',deleteRent)

module.exports = rentsRouter