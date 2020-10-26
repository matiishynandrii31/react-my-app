import React from 'react';
import Search from './components/search/search';
import Title from "./components/title/title";
import './App.css';
import Randonum from "./components/randonum/randonum";

function App(props) {
    return (
        <div>
            <Search name="enter text" />
            <Title />
            <Randonum/>
        </div>
    );
}

export default App;
