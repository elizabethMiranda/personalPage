import { Route, Routes } from 'react-router-dom';
import { Navbar } from "../../ui"
import { HomeMovies, AboutMovies } from '../pages';




export const MoviesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className='container'>
                <Routes>
                    <Route path="/" element={<HomeMovies />} />
                    <Route path="about" element={<AboutMovies />} />
                </Routes>
        </div>
    </>
  )
}
