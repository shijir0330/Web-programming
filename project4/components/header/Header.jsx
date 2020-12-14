"use strict";
import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div className="image">
            <img src={'components/header/christmas.png'}/>
            <div className="text">
                <h1>Happy new year</h1>
                <h1>- Shijir T.</h1>
            </div>
        </div>
    )
}
export default Header;