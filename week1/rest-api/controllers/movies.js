const { v4: uuidv4 } = require("uuid");
let movies = [
  {
    id: uuidv4(),
    name: "die hard",
    year: "1999",
    genre: "action",
    income: 10000000,
  },
  {
    id: uuidv4(),
    name: "Zoro",
    year: "1999",
    genre: "action",
    income: 4500000,
  },
];

let rents = movies.map((movie) => {
  return {
    id: movie.id,
    duration: Math.floor(Math.random() * 10),
    person: "hiCoders",
  };
});

const getMovies = (req, res) => {
  res.send(movies);
};

const getMovie = (req, res) => {
  const { id } = req.params;
  const foundMovie = movies.find((movie) => movie.id === id);
  res.send(foundMovie);
};
const createMovie = (req, res) => {
  const movie = req.body;
  movies.push({ id: uuidv4(), ...movie });
  res.send("Movie was added");
};
const deleteMovie = (req, res) => {
  const { id } = req.params;
  movies = movies.filter((movie) => movie.id !== id);
  res.send(`Movie with the id ${id} deleted from the database`);
};
const updateMovie = (req, res) => {
  const { id } = req.params;
  const { name, year, genre, income } = req.body;
  const movie = movies.find((movie) => movie.id === id);
  if (name) movie.name = name;
  if (year) movie.year = year;
  if (genre) movie.genre = genre;
  if (income) movie.income = income;
  res.send(`movie with the id ${id} has been updated`);
};

const getRents = (req, res) => {
  res.send(rents);
};
const postRents = (req, res) => {
  const rent = req.body;
  rents.push(rent);
  res.send("Movie was rent");
};

module.exports = {
  createMovie,
  deleteMovie,
  getMovies,
  updateMovie,
  getMovie,
  movies,
  rents,
  getRents,
  postRents,
};
