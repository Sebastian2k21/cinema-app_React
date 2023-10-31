import { Fragment } from "react";
import Content from "./Content";
import Nav from "./Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Nav/>
                <Content/>
                <Footer /> {/* Dodaj stopkę tutaj */}
            </BrowserRouter>
        </Fragment>
    )
}

export default Layout;