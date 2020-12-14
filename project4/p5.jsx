import React from 'react';
import ReactDOM from 'react-dom';

import States from './components/states/States';
import Example from "./components/example/Example";
import {HashRouter, Route, Link} from "react-router-dom";

const Switcher = () => {
    return (
        <HashRouter>
            <Link to="/states">States</Link> <br/>
            <Link to="/example">Example</Link>
            <Route path="/states" component={States}/>
            <Route path="/example" component={Example}/>
        </HashRouter>
    )
}

ReactDOM.render(
    <Switcher/>,
    document.getElementById('reactapp'),
);