import React,{useState,useEffect,useRef,} from 'react'
import Navbar from '../../Navbar/Navbar'
import Banner from './Banner/Banner'
import Footer from '../../Footer/Footer'
import Row from "./Row/Row"
import VideoSection from './Row/VideoPlayer/VideoSection';
import Loading from '../../Loading/Loading';
import './homeScreen.css'

const HomeScreen = () => {
  const[movie,setMovie] = useState([]);
  const[loading,setLoading] = useState(false);
  const[video,setVideo] = useState({details: '',keys:'',clicked: ''})
  
  let isComponentMounted = useRef(false);
  
  useEffect(()=>{
    isComponentMounted.current = true;
    setLoading(true);

    if(isComponentMounted){
      async function  fetchData(){
        const data = await fetch(`https://yts.mx/api/v2/list_movies.json/?sort_by=year&page=${Math.floor(Math.random()*3)}`) 
        const res = await data.json();
        setLoading(false);
        return res
      }
      fetchData().then((response)=>{
        setMovie(response.data.movies[Math.floor(Math.random()*response.data.movies.length-1)])
      })
    }
    return()=>{isComponentMounted.current = false}
  },[])
  

  return (
    <div className = 'homeScreen'>
      <Navbar />
      {
        loading? <Loading />
        :<>
          <Banner movie = {movie} />
          <Row title = 'Top Action' genre = {"action"} isLargeRow setVideo = {setVideo}/>
            {video.key===1 && video.clicked?<VideoSection genre = {video.details}/> : <></>}
          <Row title = 'Comedy Movies' genre = {"comedy"} setVideo = {setVideo}/>
            {video.key===2 && video.clicked?<VideoSection genre = {video.details}/> : <></>}
          <Row title = ' Top Thriller' genre = {"thriller"} setVideo = {setVideo}/>
            {video.key===3 && video.clicked?<VideoSection genre = {video.details}/> : <></>}
          <Row title = 'Drama Movies' genre = {"drama"} setVideo = {setVideo}/>
            {video.key===4 && video.clicked?<VideoSection genre = {video.details}/> : <></>}
          <Row title = 'Romance Movies' genre = {"romance"} setVideo = {setVideo}/>
            {video.key===5 && video.clicked?<VideoSection genre = {video.details}/> : <></>}
          <Row title = 'Crime Movies' genre = {"crime"} setVideo = {setVideo}/>
            {video.key===6 && video.clicked?<VideoSection genre = {video.details}/> : <></>}
      </>
      }
      <Footer/>
    </div>
  )
}

export default HomeScreen
