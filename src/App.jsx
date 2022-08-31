import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import { HomePage } from "./pages"

const App = () => {

    return <Routes>
            <Route path="/" element={<HomePage />} />
            </Routes>
}

export default App;