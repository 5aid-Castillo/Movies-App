import React,{useEffect,useState} from 'react'
import styles from '../styles/MovieDetails.module.css';
import { useParams } from 'react-router-dom'; 
import { get } from '../utils/httpClient';
import Spinner from '../components/Spinner';
import { getMovieImg } from '../utils/getMovieImg';

const MovieDetails = () => {
  /* const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path; */
  const { movieId } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  

  //Llamada asincrona
  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then(data => {
      setMovie(data);
      setIsLoading(false);
    })
  },[movieId]);
  
  if(isLoading){
    return <Spinner /> ;
  }
  /* if(!movie){
    return null;
  } */
/*   const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path; */
  const imageUrl = getMovieImg(movie.poster_path,300);
  return (
    <div className={styles.detailsContainer}>
        <img 
            className={`${styles.col} ${styles.movieImage} `} 
            src={imageUrl} 
            alt={movie.title}  
        />
        <div className={`${styles.col} ${styles.movieDetails}`}>
          <p className={styles.firstItem}><strong>Title:</strong> {movie.title}</p>
          <p><strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(" / ")}</p>
          <p><strong>Description:</strong> {movie.overview}</p>
        </div>
    </div>
  )
}

export default MovieDetails