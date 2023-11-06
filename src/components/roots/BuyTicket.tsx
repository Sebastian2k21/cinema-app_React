import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "../common/Select";


const BuyTicket = () => { 
    const rangeList = (end: number, start=1 ) => {
        const list = [];
        for(let i = start; i <= end; i++) {
            list.push(i);
        }
        return list
    }

    const movieTimes = ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"]
    const ticketCounts = rangeList(9)
    const rows = rangeList(12)
    const seats = rangeList(20)

    const [movie, setMovie] = useState({title: "", overview: "", poster_path: ""});
    const id = useParams().id;

    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [time, setTime] =  useState<string>('');
    const [count, setCount] = useState<number>(1);
    const [selectedCounts, setSelectedCounts] = useState<number[]>([1]);
    const [selectedRows, setSelectedRows] = useState<number[]>([1]);
    const [selectedSeats, setSelectedSeats] = useState<number[]>([1]);

    const getMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a84909a3156caf84337832e7fe15e20c`);
        const data = await response.json();
        setMovie(data);
    }

    useEffect(() => { 
        getMovie();
     }, []);

     useEffect(() => {
        setSelectedCounts(rangeList(count));
     }, [count])

     const handleBuyTicket = (e: any) => {
        e.preventDefault();
        
     }

     const setTicketRow = (ticket_number: number, row: number) => {
        selectedRows[ticket_number-1] = row;
        setSelectedRows(selectedRows);
     }

     const setTicketSeat = (ticket_number: number, seat: number) => {
        selectedSeats[ticket_number-1] = seat;
        setSelectedSeats(selectedSeats);
     }

    return (<div className="">
        <h1>Buy tickets for {movie.title}</h1>
        <img width={"300px"} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <form onSubmit={handleBuyTicket}>
            <div>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>

            </div>
            <div>
            <input type="text" placeholder="Surname" value={surname} onChange={e => setSurname(e.target.value)}/>

            </div>
            <div>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

            </div>

            <div>
                <input type="date" placeholder="Email" value={date} onChange={e => setDate(e.target.value)} />
                <Select values={movieTimes} onChange={(e:any)  => setTime(e.target.value)} />
            </div>
            <div>
                <label>Count</label>
                <Select values={ticketCounts} onChange={(e:any)  => setCount(e.target.value)} />
            </div>

            <ul>
            {selectedCounts.map((ticker_number) => 
            <li>
                <p>Ticket number {ticker_number}</p>
                <div>
                    <label>Row</label>
                    <Select values={rows} onChange={(e:any) => setTicketRow(ticker_number, e.target.value)} />
                </div>
                <div>
                    <label>Seat</label>
                    <Select values={seats} onChange={(e:any) => setTicketSeat(ticker_number, e.target.value)} />
                </div>
            </li>
            )}
            </ul>
           

            <button type="submit">Buy</button>
        </form>
    </div>);
}

export default BuyTicket;
