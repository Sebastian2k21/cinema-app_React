import { useContext, useEffect, useState } from "react";
import { UserContext } from "../common/UserContext";
import { Ticket, getTickets } from "../../services/TicketService";
import { Link } from "react-router-dom";

const MyTickets = () => {
  const { user } = useContext(UserContext);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(getTickets(user as string));
  })

  return (<div>
    <h1>My Tickets</h1>
    <table style={{width: "100%"}}>
      <thead>
        <tr>
          <th>Movie</th>
          <th>Date</th>
          <th>Time</th>
          <th>Owner</th>
          <td>Seats</td>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket: Ticket) => <tr>
          <td><Link to={"/movie/" + ticket.movie_id}>{ticket.movie_name}</Link></td>
          <td>{ticket.date}</td>
          <td>{ticket.time}</td>
          <td>{ticket.name} {ticket.surname} ({ticket.email})</td>
          <td>{ticket.tickets.selectedRows.map((row, index) => <p>
            Row {row}, Seat {ticket.tickets.selectedSeats[index]}
          </p>)}</td>
        </tr>)}
      </tbody>
    </table>
  </div>);
};
export default MyTickets;
