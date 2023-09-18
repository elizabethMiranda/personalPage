import { useEffect,useState } from "react";
import { MovieCard } from "./MovieCard";
import { getMovies } from '../helpers/getMoviesApi';

export const MovieList = () => {
    const [valida, setvalida] = useState(false)
    const [movies, setmovies] = useState([])
    
    const getMoviesList = async () =>{
      const movieResult = await getMovies();
      if(movieResult.length > 0){
          setvalida(true);
          setmovies(movieResult);
      }
    }

    useEffect(() => {
        getMoviesList();
    },[valida])
  
  return (
    <div className="row rows-cols-5 row-cols-md-5 row-cols-sm-3 g-3">
        {
            valida ? (
                movies.map( movie => (
                    <MovieCard 
                        key={movie.id}
                        { ...movie }
                    />
                ))
            ):(<p>Cargando informacion ...</p>)
        }
    </div>
  )
}
