import React from "react";

const MoviesList = ({ moviesList, deleteMovie, addRent, chooseUpdateMovie }) => {
  return (
    <div className="col-6">
      <h3> MoviesList</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <td>Name</td>
            <td>Genre</td>
            <td>Year</td>
            <td>Income</td>
            <td>Rent</td>
            <td>Update</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {moviesList.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.year}</td>
              <td>{movie.income}</td>
              <td className="text-center">
                <i
                  className="fa-solid fa-paper-plane text-primary"
                  onClick={() => addRent(movie)}
                ></i>
              </td>
              <td className="text-center">
                <i
                  className="fa-solid fa-pen text-success"
                  onClick={() => chooseUpdateMovie(movie)}
                ></i>
              </td>
              <td className="text-center">
                <i
                  className="fa-solid fa-trash-can text-danger"
                  onClick={() => deleteMovie(movie.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesList;
