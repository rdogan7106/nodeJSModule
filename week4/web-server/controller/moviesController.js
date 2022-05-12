import express from "express";
const router = express.Router();
import * as moviesService from "../services/moviesService.js";

router.get("/", async (req, res) => {
    const moviesList = await moviesService.getMovies()
    res.status(200).send(moviesList)
});

router.get("/:id", async (req, res) => {
    const {id} = req.params
    const movie = await moviesService.getMovie(id)
    res.status(200).send(movie)
});

router.post("/:id", async (req, res) => {
    const movie = req.body
    const newMovie = await moviesService.addNewMovie(movie)
    res.status(201).send(newMovie)
});

router.put("/:id", async (req, res) => {
    const movieID = req.params.id
    const movieBody = req.body
    const updatedMovie = await moviesService.updateMovie(movieID,movieBody)
    res.status(200).send(updatedMovie)
});

router.delete("/:id", async (req, res) => {
    const movieID = req.params.id
    await moviesService.deleteMovie(movieID)
    res.status(200).send(null)

});

export {router}
