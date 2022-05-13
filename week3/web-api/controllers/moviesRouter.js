/* const movies = require("../data/moviesData"); */
const {
  findAllMovies,
  findMovie,
  addNewMovie,
  deletedMovie,
  createDB,createTable
} = require("../services/moviesService");

const getMovies = (req, res) => {
  const moviesList = findAllMovies();
  res.status(200).send(moviesList);
};
const getMovie = (req, res) => {
  const { id } = req.params;
  const movie = findMovie(id);
  res.status(201).send(movie);
};
const deleteMovie = (req, res) => {
  const { id } = req.params.id;
  const movieDeleted = deletedMovie(id);
  res.send("movie deleted");
  res.status(201).send(movieDeleted);
};
const updateMovie = (req, res) => {
  const { id } = req.params;
  const movieBody = req.body;
  const movie = findMovie(id);
  if (movieBody.name) movie.name = movieBody.name;
  if (movieBody.year) movie.year = movieBody.year;
  if (movieBody.genre) movie.genre = movieBody.genre;
  if (movieBody.income) movie.income = movieBody.income;
  res.send(`movie with the id ${id} has been updated`);
};
const addMovie = (req, res) => {
  const movie = req.body;
  addNewMovie(movie);
  res.status(201).send(movie);
  res.send(`movie was added with ${movie.id}`);
};

const createdb = (req, res ) => {
  const newDb = createDB()
  res.send(newDb)

}
const createTable = (req,res) => {
  const newTable = createTable()
  res.send(newTable)
} 
module.exports = { getMovies, getMovie, deleteMovie, updateMovie, addMovie,createdb };
