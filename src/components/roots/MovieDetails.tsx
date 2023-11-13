import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

interface Poster {
    file_path: string;
}

const MovieDetails = () => {
    const poster_path = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
    const [movie, setMovie] = useState({title: "", overview: "", poster_path: ""});
    const [posters, setPosters] = useState<Poster[]>([]);
    const id = useParams().id;

    const getMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a84909a3156caf84337832e7fe15e20c`);
        const data = await response.json();
        setMovie(data);

        const imgResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}}/images?api_key=a84909a3156caf84337832e7fe15e20c`)
        const imgData = await imgResponse.json();
        setPosters(imgData["posters"])
    }

    useEffect(() => { 
        getMovie();
     }, []);

   return (
   <div className='DetailsStyle'>
       <h1>{movie.title}</h1>
       <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
       <p>{movie.overview}</p>

        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
            {posters.map(pos => (<div>
                    <img src={poster_path + pos.file_path} alt="poster" />
                </div>))}
        </div>

    </div>)
}

export default MovieDetails;