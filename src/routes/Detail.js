
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Loading from "../components/Loading"
import Point from "../components/Point"

function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [datas, setDatas] = useState({});

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(response => response.json())
        .then(json => {
            setDatas(json.data.movie);
            setLoading(false);
        })
    },[]);
    console.log(datas);

    return <div>
           {loading ? (<Loading/>):(
               <Point
               background_image_original={datas.background_image_original}
               medium_cover_image={datas.medium_cover_image}
               url={datas.url}
               title_long={datas.title_long}
               rating={datas.rating}
               runtime={datas.runtime}
               genres={datas.genres}
               download_count={datas.download_count}
               />
           )}
           </div>
           
}
export default Detail;

  