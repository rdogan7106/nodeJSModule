import React from "react";

const RentsMovies = ({rentsList,deleteRent}) => {
  return (
    <div className="col-3">
      <h3>RentsMovies</h3>
      <table className="table table-striped table-hover">
        <thead>
            <tr>
                <td>id</td>
                <td>duration</td>
                <td>person</td>
                <td></td>
                
            </tr>
        </thead>
        <tbody>
            {rentsList.map((movie) => <tr>
                <td key={movie.id}> {movie.id}</td>
                <td>{movie.duration}</td>
                <td>{movie.person}</td>
                <td className="text-center"><i className="fa-solid fa-trash-can text-danger" onClick={()=>deleteRent(movie.id)}></i></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default RentsMovies;
