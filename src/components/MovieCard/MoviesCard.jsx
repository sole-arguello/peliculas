import "./movieCard.css";
import { Link } from 'react-router-dom'

function MoviesCard({ itemMovie }) {
    //proviene de la documentacion de la api para traer las imagenes y
  //le paso el path del objeto en el navegador
  const imageUrl = "https://image.tmdb.org/t/p/w300" + itemMovie.poster_path;
  return (
    <li className="movieCard">
      <Link to={"/movies/" + itemMovie.id}>
        <img className="movieImg" src={imageUrl} alt={itemMovie.title} width={230} height={345} />
        <div>{itemMovie.title}</div>
      </Link>
    </li>
  );
}

export default MoviesCard;
