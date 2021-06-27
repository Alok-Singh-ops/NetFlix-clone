import React,{useState,useEffect,useRef} from 'react'
import ReactStars from 'react-rating-stars-component'
import {Link} from 'react-scroll'
import LoadingRowSection from './LoadingSection'
import './row.css';
const Row = ({genre,isLarge = false,setVideo,title}) => {
  const[list,setList] = useState([]);
  const[loading,setLoading] = useState(false);
  const[imgLoading,setImgLoading] = useState(false);

  let isRendered = useRef(false);
  useEffect(() => {
    setLoading(true)
    setImgLoading(true);
    isRendered.current = true;
    
    if(isRendered){
      async function get(){
        const res = await fetch(`https://yts.mx/api/v2/list_movies.json/?genre=${genre}`);
        const data = await res.json();
        return data
      }
      get().then((response)=>{
        setList(response.data.movies);
      })
    }
      setLoading(false);
            handleLoad(false);
      return () => {
          isRendered.current = false;
      };
  }, [genre]);



  const handleLoad = (value)=>{
    return (setImgLoading(!value))
  }

  const handleClicked  = (movie)=>{
    if (genre === 'action') {
      setVideo({details: movie,key: 1,clicked: true})
    }
    if (genre === 'comedy') {
      setVideo({details: movie,key: 2,clicked: true})    
    }
    if (genre === 'triller') {
      setVideo({details: movie,key: 3,clicked:true})    
    }
    if (genre === 'drama') {
      setVideo({details: movie,key: 4,clicked: true})    
    }
    if (genre === 'romace') {
      setVideo({details: movie,key: 5,clicked:true})    
    }
    if (genre === 'crime') {
      setVideo({details: movie,key: 6})    
    }
  }


  return (
        <div className="row-section">
        <div className = 'rowN'>
        <h1>{title}</h1>
          <div className="row-posters">
            {loading ? <LoadingRowSection /> 
              :list.map((movie,index) =>
                <Link to = 'movie-details' smooth = {true}>
                  <div className="row-content" onClick = {()=>handleClicked(movie)}>
                  <img className = {`row-poster ${isLarge? 'row-posterLarge': '' }`} key = {index} onLoad = {handleLoad} src= {movie.medium_cover_image} alt=""/>
                    {
                      imgLoading ? <> </> 
                      : movie.title_long ?
                        <div className="posterSection">
                          <div className="overlay"></div>
                            <div className="poster-details">
                            <div className="movie-name"><h3>{movie.title_long}</h3></div>  
                            <div className="movie-vote-avg">
                              <ReactStars
                                count={5}
                                size={15}
                                activeColor="#ffd700"
                                edit = {false}
                                value = {(movie.rating)/2}
                              />
                              {(movie.rating)/2}/5 
                            </div>
                            </div>                            
                        </div>
                          :<></>
                    }
                  </div>
                </Link>
              )
            }          
          </div>
        </div>
        </div>
  )
}
export default Row
