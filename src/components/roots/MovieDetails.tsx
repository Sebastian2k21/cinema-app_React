import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

const MovieDetails = () => {
    const [movie, setMovie] = useState({title: ""});
    const id = useParams().id;

    const getMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a84909a3156caf84337832e7fe15e20c`);
        const data = await response.json();
        setMovie(data);
    }

    useEffect(() => { 
        getMovie();
     }, []);

    return (<div>
        {movie != null ? <div>
            <h1>{movie.title}</h1>
            </div> : null }

    </div>)
}

export default MovieDetails;