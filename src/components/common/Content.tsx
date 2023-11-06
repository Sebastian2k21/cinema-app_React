import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "../roots/Contact";

import Repertoire from "../roots/Repertoire";
import MovieDetails from "../roots/MovieDetails";
import Login from "../roots/Login";
import Register from "../roots/Register";
import Logout from "../roots/Logout";
import NotFound from "../roots/NotFound";
import MyTickets from "../roots/MyTickets";
import BuyTicket from "../roots/BuyTicket";
import Authorized from "./Authorized";


const Content = () => {
    return (<div className="content">
        <Routes>
           
            <Route path="/repertoire" element={<Repertoire/>}/>
            <Route path="/mytickets" element={<Authorized><MyTickets/></Authorized>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/movie/:id" element={<MovieDetails/>}/>
            <Route path="/buy/:id" element={<Authorized><BuyTicket/></Authorized>}/>
            
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="*" element={<NotFound/>}/>
          
        </Routes>
        
    </div>)
}


export default Content;