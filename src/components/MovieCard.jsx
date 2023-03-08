import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/MovieCard.module.css';
/* import placeholder from '../assets/placeholder.jpg'; */
import { getMovieImg } from '../utils/getMovieImg';
const MovieCard = ({movie}) => {
    
  const imageUrl = getMovieImg(movie.poster_path, 300);
  /* const imageUrl = movie.poster_path ?"https://image.tmdb.org/t/p/w300" + movie.poster_path 
                                       : placeholder; */
  return (
    <>
        <li className={styles.movieCard}>
          <Link to={"/movies/" + movie.id}>
            <img 
                width={230} 
                height={345}
                src={imageUrl} 
                alt={movie.title} 
                className={styles.movieImage}/>
            <div className="title">{movie.title}</div>
            </Link>
        </li>
    </>
  )
}

export default MovieCard