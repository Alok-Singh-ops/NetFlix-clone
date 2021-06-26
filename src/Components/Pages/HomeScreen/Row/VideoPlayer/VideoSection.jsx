import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import './videoSection.css'


const VideoSection = ({genre}) => {


  const trueCate = (string,n)=>{
    return string?.length>n ? string.substring(0,n-1)+ '....': string
  }

  console.log(genre);


  
  return (
    
    <div className = 'movie-details' style = {{color: "white"}} id = 'movie-details'>
      <div className="movie-content">
        <h2>{genre.title_long}</h2>
        <div className="desc">
          {trueCate(`${genre.summary}`,180)}
        </div>
        <div className="link">
        <Link  className = "btn btn-videoSection" to = {
          {
            pathname: '/video',
            state: {
              genre: genre
            }
          }
        }>Play</Link>

        </div>
      </div>
      <div className="background-image" style = {{
        backgroundImage: `url("${genre.medium_cover_image}")`
      }}>
      </div>
    </div>
  )
}
export default VideoSection
