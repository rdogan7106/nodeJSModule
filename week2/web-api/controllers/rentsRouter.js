const {
  findAllRents,
  findRent,
  deletedRent,
} = require("../services/rentsService");

const getRents = (req, res) => {
  const rentsList = findAllRents();
  res.status(200).send(rentsList);
};
const getRent = (req, res) => {
  const { id } = req.params;
  const rent = findRent(id);
  res.status(201).send(rent);
};

const deleteRent = (req, res) => {
  const { id } = req.params.id;
  const rentDeleted = deletedRent(id);
  res.send("movie deleted");
  res.status(201).send(rentDeleted);
};
module.exports = { getRent, getRents, deleteRent };
