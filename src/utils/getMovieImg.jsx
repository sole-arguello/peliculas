import placeholder from '../../public/placeholder.png'

function getMovieImg(path, width) {
  console.log(path)
  return path?`https://image.tmdb.org/t/p/w${width}${path}`: placeholder
}

export default getMovieImg

  //proviene de la documentacion de la api para traer las imagenes y
  //le paso el path del objeto en el navegador
//   const imageUrl = "https://image.tmdb.org/t/p/w300" + itemMovie.poster_path;