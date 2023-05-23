import get  from '../../data/httpClient'
import getMovieImg from '../../utils/getMovieImg'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import '../movieDetails/movieDetails.css'
function MovieDetails() {

    const { movieId } = useParams()
    const [movie, setMovie] = useState([])
    const [genero, setGenero] = useState([])
    useEffect(()=>{
        
        console.log(movieId)
        get('/movie/' + movieId)
        .then((data) => {
            setMovie(data)
            setGenero(data.genres[0])
            console.log(data)
        })
        .catch((err) => console.log(err))
    }, [movieId])

    const imageUrl = getMovieImg(movie.poster_path, 500)

  return (
    <div className='ditailsContainer'>
        <img className='col ditailsImage' src={imageUrl} alt={movie.title} />

        <div className='col ditailsText'>
          <p className='ditailsTitle'>
            <span className='title'>Titulo: </span>
            <span className='titleConteiner'>{ movie.title}</span>
          </p>
          <p className='ditailsGenero'>
            <strong>Genero: </strong>
            {genero.name}
          </p>
          <p className='ditailsDescription'>
            <strong>Descripcion: </strong>
            {movie.overview}
          </p>
        </div>
    </div>
  )
}

export default MovieDetails