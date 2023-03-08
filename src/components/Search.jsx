/* import React,{useState,useEffect} from 'react' */
import styles from '../styles/Search.module.css';
import {FaSearch} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { useQuery } from '../hooks/useQuery'; 
const Search = () => {

  const query = useQuery();
  const search = query.get("search");
  /* const [searchText, setSearchText] = useState("") */
  const history = useNavigate();
  

  
 /*  useEffect(() => {
    setSearchText(search || "")
},[search]); */

  const handleSubmit = (e) => {
      e.preventDefault();
     /*  history("/?search=" + searchText) */
  }


  return (
   
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
            <input className={styles.searchInput} type="text" 
                   value={search}/* search */ placeholder="Title" aria-label='Search Movies' onChange={(e) => {
                     const value = e.target.value;
                     /* setSearchText(value); */
                     history("/?search=" + value)
                   }}/>
            {/* <button className={styles.searchButton} type="submit"> */}
              <FaSearch color="black" size={20} className={styles.searchButton}/>
            {/* </button> */}
        </div>
    </form>
  )
}

export default Search