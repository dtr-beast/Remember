import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    BrowserRouter as Router,
} from "react-router-dom"
// Load Lemonada typeface
// require('typeface-lemonada')


ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);
