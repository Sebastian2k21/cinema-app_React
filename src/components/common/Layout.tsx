import { Fragment } from "react";
import Content from "./Content";
import Nav from "./Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";



const Layout = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Nav/>
                <Content/>
            </BrowserRouter>
            
         
        </Fragment>
    )
}

export default Layout;