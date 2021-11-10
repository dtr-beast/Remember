import React from 'react';
import {Routes, Route} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

export default function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Register/>}/>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    );
}

