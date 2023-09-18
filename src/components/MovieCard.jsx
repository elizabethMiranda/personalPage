import { Link } from 'react-router-dom';

export const MovieCard = ({
    id,
    title,
    poster_path,
    release_date,
}) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col sizeimg">
                <div className="card-columns">
                    <div className="card">
                    <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`} className="card-img-top img-fluid img-thumbnail rounded" alt={ title} />
                    <div className="card-body">
                        <h6 className="card-title">{title}</h6>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
