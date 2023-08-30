import { Link } from 'react-router-dom';

export const MovieCard = ({
    id,
    title,
    creator,
    rating,
    dates,
    image,
    channel
}) => {
  return (
    <div className="col">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4 ">
                    <img src={image} className="card-img" alt={ title} />
                </div>
                <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{creator}</p>
                        <p className="card-text">{dates}</p>

                        <Link to="/*">
                            Mas ...
                        </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
