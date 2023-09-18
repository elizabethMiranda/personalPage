import { useEffect,useState } from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
    const [valida, setvalida] = useState(false)
    const [movies, setmovies] = useState([])
    const peticionMovie=`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
    const Token=`eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGYwYTM0ZjZlMjJjNjc5OTRkYzRjM2ZjMmU5YTE3OCIsInN1YiI6IjY1MDc4YTJlMzczYWMyMDBmZjA1NTZhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RkcsYuh6jU_097ZUnciP8leCnF6xKkVALF37CpSXFrs`;
    //cargar las movies
    const getMovies = async() =>{
        const res = await fetch(peticionMovie,{
            headers:{
                Authorization:`Bearer ${Token}`
            }})
        const dataRes = await res.json();
        console.log('datos recibidos de la api');
        console.log(dataRes.results);
        if(dataRes.results.length > 0){
            setvalida(true);
            setmovies(dataRes.results);
        }

    }
    useEffect(() => {
      getMovies();
    },[valida])
    
    //const datoMovie = getMoviesAll();

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
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
