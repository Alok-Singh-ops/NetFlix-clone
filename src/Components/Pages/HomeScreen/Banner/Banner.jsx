import React from 'react'
import { Link } from 'react-router-dom';


import  './Banner.css'
function Banner({movie}) {
console.log(movie);
  const trueCate = (string,n)=>{
    return string?.length>n ? string.substring(0,n-1)+ '....': string
  }

  return (
      <div className = 'banner' style = {{
        backgroundImage: `url("${movie.medium_cover_image}")`,
        height: '400px',
        backgroundPosition: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        objectFit: 'contain'
      }}>
      <div className="banner-contents">
        <h1 className = 'banner-title'>{movie?.title_long}</h1>
        <div className="banner-buttons">
          <Link className = "banner-button" to = {{
            pathname: '/video',
            state:{
              genre:movie
            }
          }}>Play</Link>
          <button className="banner-button">My List</button>
        </div>
  
        <div className="banner-desc">
  
        {
          trueCate(
            `${movie?.summary}`
            ,180)
        }
        </div>
      </div>
      <div className="banner--fade" /> 
      </div>
  )
}
export default Banner
