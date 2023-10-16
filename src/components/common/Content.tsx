import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "../roots/Contact";
const Content = () => {
    return (<div>
        <Routes>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>)
}

export default Content;