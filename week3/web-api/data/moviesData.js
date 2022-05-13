const { v4: uuidv4 } = require("uuid");
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rd123456rd",
  database: "sakila",
});
con.connect((err) => {
  if (err) throw err;
});

const createDB = con.query("CREATE DATABASE MYMOVIES", (err, results) => {
  if (err) throw err;
});

const createTable = con.query(
  "CREATE TABLE movies (id int AUTO_INCREMENT , title VARCHAR(255),body VARCAHAR(255) )",
  (err, results) => {
    if (err) throw err;
  }
);
const selectMovie = con.query("Select * from movies", (err, results) => {
  if (err) throw err;
});

const addNewMovie = con.query(
  "INSERT INTO movies (title,body) values(movie1,body) ",
  (err, results) => {
    if (err) throw err;
  }
);

const deleteMovie = con.query(
  "delete from movies where id=1",
  (err, results) => {
    if (err) throw err;
  }
);

const updateMovie = con.query(
  "update movies set title = newtitle where id=1 ",
  (err, results) => {
    if (err) throw err;
  }
);

let movies = [];

con.query("Select * from sakila.film limit 10", (err, results) => {
  results = JSON.parse(JSON.stringify(results));
  results.forEach((element) => {
    movies.push(element);
  });
  return movies;
});

module.exports = movies;
