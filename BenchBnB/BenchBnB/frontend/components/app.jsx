import React from "react";
import { Route, Switch } from 'react-router-dom'
import GreetingContainer from './greetings/greetings_container'
const App = () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <GreetingContainer />
        </header>
    </div>
);


export default App;