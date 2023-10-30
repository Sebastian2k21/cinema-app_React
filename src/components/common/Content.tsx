import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "../roots/Contact";
import MyTickets from "../roots/MyTickets";
import Repertoire from "../roots/Repertoire";
import MovieDetails from "../roots/MovieDetails";
import Login from "../roots/Login";
import Register from "../roots/Register";
import Logout from "../roots/Logout";
import NotFound from "../roots/NotFound";


const Content = () => {
    return (<div className="content">
        <Routes>
           
            <Route path="/repertoire" element={<Repertoire/>}/>
            <Route path="/tickets" element={<MyTickets/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/movie/:id" element={<MovieDetails/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        
    </div>)
}


export default Content;