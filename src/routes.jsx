// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homePage';
import CaptureImage from './capture';
import 'bootstrap/dist/css/bootstrap.min.css';
import WifiLogin from './Wifi';

function RoutesApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WifiLogin />} />
                <Route path="/capture" element={<CaptureImage />} />
            </Routes>
        </Router>
    );
}

export default RoutesApp;
