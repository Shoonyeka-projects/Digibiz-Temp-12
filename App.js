import React from 'react';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from "./pages/Home";
import About from './pages/About';
import Component_7 from './components/Component_7';
import Feature from './pages/Feature';
import Contact from './pages/Contact';


export default function App() {
    return (
        <BrowserRouter basename="/">
            <Header />
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={Home} />
                <Route exact path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
                <Route exact path={`${process.env.PUBLIC_URL + "/feature"}`} component={Feature} />
                <Route exact path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact} />
            </Switch>
            <Component_7/>
            <Footer />
        </BrowserRouter>
    )
}