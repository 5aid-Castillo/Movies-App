/* import { Route } from "react-router"; */
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import LandingPages from "./pages/LandingPages";
import  MovieDetails  from "./pages/MovieDetails"; 
/* import { MoviesGrid } from "./components/MoviesGrid"; */
import styles from './styles/App.module.css';


function App() {
  return (
    <>
     <BrowserRouter>
      <header className="header">
        <Link  to="/"><h1 className={styles.title}>Movies</h1></Link>
        
        {/* <Link to="/movie">Movie</Link> */}

      </header>
      <main>
       {/* <MoviesGrid /> */}
      
          <Routes>
          <Route exact path="/movies/:movieId" element={<MovieDetails />}></Route>
          <Route path="/" element={<LandingPages />}></Route>
          </Routes>
       
      </main>
      </BrowserRouter>
    </>
  );
}

export default App;
