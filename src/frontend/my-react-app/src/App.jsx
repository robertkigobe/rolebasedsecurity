import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminComponent from "./components/AdminComponent.jsx";
import UserComponent from './components/UserComponent';
import GuestComponent from './components/GuestComponent';
import LoginComponent from './components/LoginComponent';

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/admin">Admin</Link></li>
                    <li><Link to="/user">User</Link></li>
                    <li><Link to="/guest">Guest</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/admin" element={<AdminComponent />} />
                <Route path="/user" element={<UserComponent />} />
                <Route path="/guest" element={<GuestComponent />} />
                <Route path="/login" element={<LoginComponent />} />
            </Routes>
        </Router>
    );
};

export default App;