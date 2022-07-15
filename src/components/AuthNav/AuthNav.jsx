import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
    display: 'inline-block',
    textDecoration: 'none',
    padding: '0 10px',
    fontWeight: 700,
    color: '#fff',
    textShadow: '1px 1px 10px blue, 1px 1px 5px black, 1px 1px 7px yellow'
};

let activeStyle = {
    display: 'inline-block',
    textDecoration: 'none',
    padding: '0 10px',
    fontWeight: 700,
    color: '#b90b7f',
};

const AuthNav = () => (
    <div>
        <NavLink
        to="/register"
        exact="true"
        style={({ isActive }) => (isActive ? activeStyle : styles)}
        >
        Registration
        </NavLink>
        <NavLink
        to="/login"
        exact="true"
        style={({ isActive }) => (isActive ? activeStyle : styles)}
        >
        Log In
        </NavLink>
    </div>
);

export default AuthNav;