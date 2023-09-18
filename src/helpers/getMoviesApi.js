export const getMovies = async() =>{
    const peticionMovie=`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
    const Token=`eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGYwYTM0ZjZlMjJjNjc5OTRkYzRjM2ZjMmU5YTE3OCIsInN1YiI6IjY1MDc4YTJlMzczYWMyMDBmZjA1NTZhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RkcsYuh6jU_097ZUnciP8leCnF6xKkVALF37CpSXFrs`;
    const res = await fetch(peticionMovie,{
        headers:{
            Authorization:`Bearer ${Token}`
        }})
    const { results } = await res.json();
    return results;
}