import * as moviesRepository from '../data/moivesData.js'

export const getMovies = async () => {
    return await moviesRepository.findAllMovies()
}

export const getMovie = async (pId) => {
    return await moviesRepository.findAMovie(pId)
}

export const updateMovie = async (pMovieId, pMovieObj) => {
    return await moviesRepository.updateMovie(pMovieId,pMovieObj)
}

export const addNewMovie = async (pMovieObj) => {
    return await moviesRepository.addMovie(pMovieObj)
}

export const deleteMovie =  async (pId) => {
    return await moviesRepository.deleteMovie(pId)
}