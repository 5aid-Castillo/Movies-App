import React from 'react'
import { MoviesGrid } from '../components/MoviesGrid'
import Search from '../components/Search'
import { useDebounce } from '../hooks/useDebounce'
import { useQuery } from '../hooks/useQuery'

const LandingPages = () => {
  const query = useQuery();
  const search = query.get("search");

  const debounceSearch = useDebounce(search,500);
  return (
    <>
        <Search />
        <MoviesGrid key={search} search={debounceSearch}/>
        
    </>
  )
}

export default LandingPages