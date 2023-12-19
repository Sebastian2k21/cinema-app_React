import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

interface Poster {
    file_path: string;
}

interface Comment {
    email: string
    body: string
}

const MovieDetails = () => {
    const poster_path = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
    const [movie, setMovie] = useState({title: "", overview: "", poster_path: ""});
    const [posters, setPosters] = useState<Poster[]>([]);
    const [comments, setComments] = useState<Comment[]>([]);
    const id = useParams().id;

    const getMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a84909a3156caf84337832e7fe15e20c`);
        const data = await response.json();
        setMovie(data);

        const imgResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}}/images?api_key=a84909a3156caf84337832e7fe15e20c`)
        const imgData = await imgResponse.json();
        let posters = imgData["posters"]

        if(posters.length > 4) {
            posters = posters.slice(0, 4)
            console.log("OK")
        }
        setPosters(posters)
    }

    const getComments = async () => {
        const newId = parseInt(id as string) % 100
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${newId}/comments`)
        if(response.ok) {
            const data = await response.json();
            setComments(data);
        }
    }

    useEffect(() => { 
        getMovie();
        getComments();
     }, []);

   return (
   <div className='DetailsStyle'>
       <h1>{movie.title}</h1>
       <img className='DetailsStyleImg'  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
       <p>{movie.overview}</p>

        <h3 className='commentsMovie'>Comments</h3>
        <div>
            {comments.map(comment => <p>
                <div className='emailComments'>{comment.email}</div>
                <div>{comment.body}</div>
            </p>)}
        </div>
        
        <h3 className='posterMovie'>Posters</h3>
        <div className="poster-grid">
            {posters.map(pos => (
                    <img className="poster" src={poster_path + pos.file_path} alt="poster" />
                ))}
        </div>

    </div>)
}

export default MovieDetails;