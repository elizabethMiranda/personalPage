import { getMoviesAll } from "../helpers";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {

    const datoMovie = getMoviesAll();

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            datoMovie.map( movie => (
                <MovieCard 
                    key={movie.id}
                    { ...movie }
                />
            ))
        }
    </div>
  )
}
