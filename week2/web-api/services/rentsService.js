const rents = require("../data/moviesData");

const findAllRents = () => {
  return rents;
};
const findRent = (pID) => {
  const rent = rents.find((movie) => movie.id === pID);
  return rent;
};

const deletedRent = (pID) => {
  const rentDeleted = movies.filter((movie) => movie.id !== pID);
  return rentDeleted;
};
module.exports = { findAllRents, findRent, deletedRent };
