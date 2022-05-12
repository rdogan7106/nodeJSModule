import  * as rentsRepository from '../data/rentsData.js'

export const getRents = async () => {
    return await rentsRepository.findAllRents()
}
export const getRent = async (pId) => {
    return await rentsRepository.findARent(pId)
}
export const addNewRent = async (pRentObj) => {
    return await rentsRepository.addNewRent(pRentObj)
}
export const deleteRent = async (pId) => {
    return await rentsRepository.deleteRent(pId)
}
