import { movies } from '../data/movies'

//Crear una funcion que importe las peliculas
export const getMoviesAll = () => {
    return movies.map(datamovie => datamovie);
}