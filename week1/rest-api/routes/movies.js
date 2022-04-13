const express = require("express");
const {
  createMovie,
  deleteMovie,
  getMovies,
  updateMovie,
  getMovie,
  getRents,
  postRents,
} = require("../controllers/movies.js");

const moviesRouter = express.Router();
const rentsRouter = express.Router();

moviesRouter.get("/", getMovies);
moviesRouter.get("/:id", getMovie);
moviesRouter.post("/", createMovie);
moviesRouter.delete("/:id", deleteMovie);
moviesRouter.patch("/:id", updateMovie);

rentsRouter.get("/", getRents);
rentsRouter.post("/:id", postRents);

module.exports = { moviesRouter, rentsRouter };
