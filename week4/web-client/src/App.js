import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import MoviesForm from "./components/MoviesForm";
import MoviesList from "./components/MoviesList";
import RentsMovies from "./components/RentsMovies";

const App = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [rentsList, setRentsList] = useState([]);
  const [updateMovie, setUpdateMovie] = useState("");
  /**Get Methods */
  const getMovies = () => {
    fetch("http://localhost:5000/movies")
      .then((response) => response.json())
      .then((response) => setMoviesList(response));
  };
  const getRents = () => {
    fetch("http://localhost:5000/rents")
      .then((response) => response.json())
      .then((response) => setRentsList(response));
  };

  /**Delete Methods */
  const deleteMovie = (pMovieId) => {
    fetch(`http://localhost:5000/movies/${pMovieId}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((response) => response);
    const deletedMovie = moviesList.filter((movie) => movie.id !== pMovieId);
    setMoviesList(deletedMovie);
  };

  const deleteRent = (pMovieId) => {
    fetch(`http://localhost:5000/rents/${pMovieId}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((response) => response);

    const findDeletedMovie = rentsList.find((movie) => movie.id === pMovieId);
    setMoviesList([...moviesList, findDeletedMovie]);

    const deletedRent = rentsList.filter((movie) => movie.id !== pMovieId);
    setRentsList(deletedRent);
  };

  /** Post */
  const addMovie = (pMovie) => {
    setMoviesList([...moviesList.concat(pMovie)]);
  };

  const addRent = (pMovie) => {
    fetch(`http://localhost:5000/rents/${pMovie}`, {
      method: "POST",
      body: JSON.stringify(pMovie),
      headers: {
        "Content-Type": "application/json; charset = UTF-8",
      },
    })
      .then((response) => response.json())
      .then((response) => response);

    setRentsList([...rentsList, pMovie]);
    const deletedMovie = moviesList.filter((movie) => movie.id !== pMovie.id);
    setMoviesList(deletedMovie);
  };

  /**Put Methods */
  const chooseUpdateMovie = (pMovie) => {
    setUpdateMovie(pMovie);
    ReactDOM.findDOMNode(document.querySelector("#movieName")).value =
      updateMovie.name;
    ReactDOM.findDOMNode(document.querySelector("#movieGenre")).value =
      updateMovie.genre;
    ReactDOM.findDOMNode(document.querySelector("#movieYear")).value =
      updateMovie.year;
    ReactDOM.findDOMNode(document.querySelector("#movieIncome")).value =
      updateMovie.income;
  };


  useEffect(() => {
    getMovies();
    getRents();
  }, []);

  return (
    <div className="container">
      <h1 className="h1 text-center my-3"> Movies Application</h1>
      <div className="row">
        <MoviesForm
          addMovie={addMovie}
          moviesList={moviesList}
          setMoviesList={setMoviesList}
          updateMovie={updateMovie}
        />
        <MoviesList
          moviesList={moviesList}
          deleteMovie={deleteMovie}
          addRent={addRent}
          chooseUpdateMovie={chooseUpdateMovie}
        />
        <RentsMovies
          rentsList={rentsList}
          deleteRent={deleteRent}
          updateMovie={updateMovie}
        />
      </div>
    </div>
  );
};

export default App;
