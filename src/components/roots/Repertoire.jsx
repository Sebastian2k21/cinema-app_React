import {useState, useEffect} from 'react';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const Repertoire = () => {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=a84909a3156caf84337832e7fe15e20c');
        const data = await response.json();
        setMovies(data.results);
    }

    useEffect(() => {
        getMovies();
    }, []); 
        
    return (<div class="grid">
        {movies.map((movie) => <div class="movie-container">
            <h3>{movie.title}</h3>
            <p>{movie.vote_average} <svg xmlns="http://www.w3.org/2000/svg" fill="gold" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></p>
            <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face/" + movie.poster_path} />
            <p><Link to={"/movie/"+movie.id}><Button>Details</Button></Link></p>
            
            </div>)}
    </div>)
}

export default Repertoire;