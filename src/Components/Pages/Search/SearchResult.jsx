import React from 'react'
import {Link} from 'react-router-dom';
import './searchResult.css'


const SearchResult = ({element}) => {
  const handleClick = ()=>{
      console.log("object")
  }
  return (
    <>
    <div className = 'search-result' onClick = {handleClick}>
        <div className="card-img" style = {{backgroundImage: `url("${element.medium_cover_image}")`,}}>
        </div>
        <div className="card-content">
            <div className="card-title"><h3>{element.title_long}</h3></div>
            <div className="card-content-info">
              <div className="card-runtime">Duration: {element.runtime}m</div>
              <div className="card-genres">Genre: {element.genres[0]}</div>
              <div className="card-quality">Quality: {element.quality}</div>
              <Link  className = "btn btn-videoSection search-result-btn" to = {
          {
            pathname: '/video',
            state: {
              genre: element
            }
          }
        }>Play</Link>
          </div>
        </div>
    </div>
    </>
  )
}
export default SearchResult
