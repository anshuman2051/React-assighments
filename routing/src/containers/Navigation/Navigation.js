import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

const Navigation = (props)=>(
    <nav className="NavBar">
        <Link to="/users">users</Link>
        <Link to="/courses">courses</Link>
    </nav>
);
export default Navigation;