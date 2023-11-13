export interface Ticket {
    movie_id: string;
    movie_name: string;
    name: string;
    surname: string;
    email: string;
    date: string;
    time: string;
    tickets: {
        selectedRows: number[], 
        selectedSeats: number[]
    }
}

interface Tickets {
    [username: string]: Ticket[];
  }

export const addTicket = (username: string, ticket: Ticket) => {
    const ticketsStr = localStorage.getItem('tickets');
    if(ticketsStr == null) {
        const tickets: Tickets = {};
        tickets[username] = [ticket];
        localStorage.setItem('tickets', JSON.stringify(tickets));
    } else {
        const tickets = JSON.parse(ticketsStr);
        if(tickets[username] == null) {
            tickets[username] = [ticket];
        } else {
            tickets[username].push(ticket);
        }
        localStorage.setItem('tickets', JSON.stringify(tickets));
    }
}

export const getTickets = (username: string) => {
    const ticketsStr = localStorage.getItem('tickets');
    if(ticketsStr == null) {
        return [];
    } else {
        const tickets = JSON.parse(ticketsStr);
        if(tickets[username] == null) {
            return [];
        } else {
            return tickets[username];
        }
    }
}