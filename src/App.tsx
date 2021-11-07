import React from 'react';
import {Routes, Route} from "react-router-dom"

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Register/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
}

