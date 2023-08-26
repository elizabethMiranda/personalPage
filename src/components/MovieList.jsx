import { getMoviesAll } from "../helpers";

export const MovieList = () => {

    const datoMovie = getMoviesAll();

  return (
    <ul>
        {
            datoMovie.map( movie => (
                <li key={movie.id}>
                    { movie.title}
                </li>
            ))
        }
    </ul>
  )
}
