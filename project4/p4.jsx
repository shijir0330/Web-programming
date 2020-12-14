import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';

import States from './components/states/States';
import Example from "./components/example/Example";

const Switcher = () => {
    const [check, setState] = useState(false);
    if (check === false) {
        return (
            <div>
                <button onClick={() => setState(true)}>Switch to Example</button>
                <States />
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={() => setState(false)}>Switch to States</button>
                <Example />
            </div>
        )
    }
}

ReactDOM.render(
    <Switcher/>,
    document.getElementById('reactapp'),
);