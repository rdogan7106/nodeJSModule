const { v4: uuidv4 } = require("uuid");
let rents = [
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
module.exports = rents;
