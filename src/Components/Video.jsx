import React from 'react'
import { useLocation } from 'react-router'
import  './video.css'
import Navbar from '../Components/Navbar/Navbar'


const Video = () => {
  
  
  const location = useLocation()
  const {genre} = location.state
  const hash = genre.torrents[0].hash;
  
  window.webtor = window.webtor || [];
          window.webtor.push({
            id: "player",
            // torrentUrl: `${uri1}`,
            baseUrl: "https://webtor.io",
            // baseUrl: 'http://192.168.0.100:4000',
            magnet: `magnet:?xt=urn:btih:${hash}`,
            // magnet: 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F',
            width: "100%",
            height: "100%",
            features: {
              continue: false,
              // title:       false,
              // p2pProgress: false,
              // subtitles:   false,
              // settings:    false,
              // fullscreen:  false,
              // playpause:   false,
              // currentTime: false,
              // timeline:    false,
              // duration:    false,
              // volume:      false,
              // chromecast:  false,
            },
            on: function (e) {
              if (e.name == window.webtor.TORRENT_FETCHED) {
                console.log("Torrent fetched!", e.data.files);
                var p = e.player;
                var files = document.getElementById("files");
                for (const f of e.data.files) {
                  if (!f.name.endsWith(".mp4")) continue;
                  var a = document.createElement("a");
                  a.setAttribute("href", f.path);
                  a.innerText = f.name;
                  files.appendChild(a);
                  a.addEventListener("click", function (e) {
                    e.preventDefault();
                    p.open(e.target.getAttribute("href"));
                    return false;
                  });
                }
              }
              if (e.name == window.webtor.TORRENT_ERROR) {
                console.log("Torrent error!");
              }
              /* if (e.name == window.webtor.INITED) {
                var p = e.player;
                document
                  .getElementById("play")
                  .addEventListener("click", function (ev) {
                    p.play();
                  });
                document
                  .getElementById("pause")
                  .addEventListener("click", function (ev) {
                    p.pause();
                  });
                document
                  .getElementById("moveto1min")
                  .addEventListener("click", function (ev) {
                    p.setPosition(60);
                  });
                document
                  .getElementById("movetostart")
                  .addEventListener("click", function (ev) {
                    p.setPosition(0);
                  });
              } */
              /* if (e.name == window.webtor.PLAYER_STATUS) {
                document.getElementById("player-status").innerHTML = e.data;
              }
              if (e.name == window.webtor.OPEN) {
                console.log(e.data);
              }
              if (e.name == window.webtor.CURRENT_TIME) {
                document.getElementById("current-time").innerHTML = parseInt(
                  e.data
                );
              }
              if (e.name == window.webtor.DURATION) {
                document.getElementById("duration").innerHTML = parseInt(
                  e.data
                );
              }
              if (e.name == window.webtor.OPEN_SUBTITLES) {
                console.log(e.data);
              } */
            },
          });
  
  
  
  
  return (
    <div className = 'video'>
      <Navbar></Navbar>
      <h1>{genre.title_long}</h1>
    </div>
  )
}

export default Video
