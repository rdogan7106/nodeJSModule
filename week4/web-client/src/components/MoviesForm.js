import React, { useState } from "react";
const { v4: uuidv4 } = require("uuid");

const MoviesForm = ({ addMovie, updateMovie,setMoviesList,moviesList }) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [income, setIncome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: uuidv4(),
      name: name,
      genre: genre,
      year: year,
      income: income,
    };
    fetch("http://localhost:5000/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json; charset = UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => res);
    addMovie(newMovie);
  };
  
  const handleUpdate = (pMovie) => {
    const updateMovie = {
      id: pMovie.id,
      name: pMovie.name,
      genre: pMovie.genre,
      year: pMovie.year,
      income: pMovie.income,
    };

    fetch(`http://localhost:5000/movies/${pMovie.id}`, {
      method: "PUT",
      body: JSON.stringify(updateMovie),
      headers: {
        "Content-Type": "application/json; charset = UTF-8",
      },
    })
      .then((response) => {
        response.json();
      })
      .then((response) => response);

    const movies = moviesList.filter((movie) => movie.id !== pMovie.id);
    setMoviesList([...movies, updateMovie]);
  };

  return (
    <div className="col-3">
      <h3>MoviesForm</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="movieName" className="form-label">
            Movies Name
          </label>
          <input
            type="text"
            className="form-control"
            id="movieName"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="movieYear" className="form-label">
            Year
          </label>
          <input
            type="number"
            className="form-control"
            id="movieYear"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <div className="mb-1">
          <label htmlFor="movieGenre" className="form-label">
            Genre
          </label>
          <input
            type="text"
            className="form-control"
            id="movieGenre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>

        <div className="mb-1">
          <label htmlFor="movieIncome" className="form-label">
            Income
          </label>
          <input
            type="number"
            className="form-control"
            id="movieIncome"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary ms-5 me-2">
          Submit
        </button>
        <button
          type="submit"
          className="btn btn-primary ms-2"
          onClick={(e) => handleUpdate(updateMovie)}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default MoviesForm;
