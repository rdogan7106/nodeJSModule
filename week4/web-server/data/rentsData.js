import Rents from "../commons/sequelize.js";

export const findAllRents = async () => {
  return await Rents.findAll();
};
export const findARent = async (pId) => {
  return await Rents.findByPk(pId);
};
export const addRent = async (pObj) => {
  return await Rents.create(pObj);
};
export const deleteRent = async (pId) => {
    return await Rents.destroy({
      where: { id: pId },
    });
  };
  