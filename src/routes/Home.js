import {useEffect, useState} from "react";
import Movie from '../components/movie';


function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    // useEffect(()=>{
    //   fetch('https://yts.mx/api/v2/list_movies.json?sort_by=download_count').then((response)=>response.json()).then((json)=>{
    //     setMovies(json.data.movies); setLoading(false)});
    // },[]);
    // console.log(movies);
    const getMovies = async () => {
      // const response = await fetch('https://yts.mx/api/v2/list_movies.json?sort_by=download_count');
      // const json = await response.json();
      // setMovies(json.data.movies);
      // setLoading(false);
      const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?sort_by=download_count')).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(()=>{
      getMovies();
    },[]);
    console.log(movies);
    return (
     <div>
       {loading ? (<h1>Loading...</h1>) : (
        <div>{movies.map((movie) => (
          <Movie 
          key={movie.id}
          id={movie.id}
          coverImg ={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}/>
       
          ))}
          </div>
          )}
     </div>
    );    
}

export default Home;