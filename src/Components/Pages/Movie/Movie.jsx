import React,{useEffect} from 'react'
import { useLocation } from 'react-router'
import  './Movie.css'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'

const Video = () => {
  
  const location = useLocation()
  const {genre} = location.state
  const hash = genre.torrents[0].hash;

  const trueCate = (string,n)=>{
    return string?.length>n ? string.substring(0,n-1)+ '....': string
  }

  useEffect(()=>{
    window.webtor = window.webtor || [];
          window.webtor.push({
            id: "player",
            baseUrl: "https://webtor.io",
            magnet: `magnet:?xt=urn:btih:${hash}`,
            width: "100%",
            height: "150%",
            features: {
              continue: false,
            },
            on: function (e) {
              if (e.name === window.webtor.TORRENT_FETCHED) {
                console.log("Torrent fetched!", e.data.files);
                for (const f of e.data.files) {
                  if (!f.name.endsWith(".mp4")) continue;
                }
              }
              if (e.name === window.webtor.TORRENT_ERROR) {
                console.log("Torrent error!");
              }
            },
          });
        },[hash])

  return (
    <>
      <Navbar></Navbar>
    <div className = 'video'>
      <div className="video-contents">
      <div className="video-content">
        <div className="video-poster" style = {
          {backgroundImage: `url("${genre.medium_cover_image}")`
        }}></div>
        <div className="video-details">
          <div className="title"><h2>{genre.title_long}</h2></div>
          <div className="video-desc">{trueCate(genre.summary,150)}</div>
            <div className="video-info">
              <div className="genres">
                <h4>Genre: </h4> <span className = "vid-info">{genre.genres[0]}</span></div>
              <div className="run-time">
                <h4>Duration: </h4>  <span className="vid-info">{genre.runtime}m </span>   </div>
              <div className="rating">
                <h4>Rating: </h4><span className="vid-info">{genre.rating} </span></div>
              <div className="quality">
                <h4>Quality: </h4><span className="vid-info">{genre.torrents[0].quality} </span></div>
            </div>
        </div>
      </div>
    </div>
      </div>
      <Footer/>
    </>
  )
}

export default Video
