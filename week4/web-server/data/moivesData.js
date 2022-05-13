import {Movies}  from '../commons/sequelize.js'

export async function findAllMovies() {
  return await Movies.findAll()
};
export  async function findAMovie(pId) {
  return await Movies.findByPk(pId);
};
export async function addMovie(pObj) {
  return await Movies.create(pObj);
};

export async function updateMovie(pId, pObj) {
  return await Movies.update(pObj, {
    where: { id: pId },
  });
};
export async function deleteMovie(pId) {
  return await Movies.destroy({
    where: { id: pId },
  });
};
