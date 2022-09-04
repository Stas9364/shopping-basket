import React from 'react';
import './App.css';
import {AppRouter, Navbar} from "./components";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
