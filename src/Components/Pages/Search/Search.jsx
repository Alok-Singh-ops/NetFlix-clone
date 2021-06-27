import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router'
import Navbar from '../../Navbar/Navbar'
import SearchForm from '../../SearchForm/SearchForm'
import Footer from '../../Footer/Footer';

import Loading from '../../Loading/Loading'
import SearchResult from './SearchResult'


import './search.css'
const Search = () => {
  const [loading,setLoading] = useState(false);
  const [movies,setMovies] = useState([]);
  const location =useLocation();
  const searchedTerm = location.state;
  useEffect(()=>{
    setLoading(true);
    const get = async(term)=>{
      const res = await fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${term}`)
      const data = await res.json();
      return data;
    }
    
    get(searchedTerm.search)
    .then((response)=>{
      setMovies(response.data.movies)
      setLoading(false);
    })
    .catch((err)=> console.log(err));
  },[searchedTerm.search])


  return (
    <>


    <div className = 'searched-video'>
      <Navbar/>
      {/* <SearchForm /> */}
      {loading ? <Loading/> : 
        <div className="searched-content">
          {   
              movies.map((element,index)=>{
              return (<SearchResult key = {index} element = {element}    />)
            })
          }
      </div>
      }
    </div>
    <Footer />
    </>
  )
}

export default Search
