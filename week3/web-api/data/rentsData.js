const { v4: uuidv4 } = require("uuid");
const movies = require("./moviesData");

let rents = movies.forEach((element, index) => {
  if (index < 5) {
    rents.push(element);
  }
});
module.exports = rents;
