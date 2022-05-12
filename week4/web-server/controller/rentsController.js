import express from "express";
const router  = express.Router();
import * as rentsServices from '../services/rentsServices.js'

router.get('/', async(req,res) => {
    const rentList = rentsServices.getRents();
    res.status(200).send(rentList);
})

router.get('/:id', async( req,res) => {
    const {id} = req.params
    const movie = await rentsServices.getRent(id)
    res.status(200).send(movie)
})
router.post(':/id', async(req, res) => {
    const rents = req.body
    const newRent = rentsServices.addNewRent(rents)
    res.status(201).send(newRent)
})
router.delete('/id',async(req,res) => {
    const {id} = req.params
    await rentsServices.deleteRent(id)
    res.status(200).send(null)
})
export {router}