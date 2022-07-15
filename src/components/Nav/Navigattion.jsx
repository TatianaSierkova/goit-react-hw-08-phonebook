import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const styles = {
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 700,
    color: '#fff',
    textShadow: '1px 1px 10px blue, 1px 1px 5px black, 1px 1px 7px yellow'
};

let activeStyle = {
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 700,
    color: '#b90b7f',
};
const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <nav>
        {!isLoggedIn ? (
            <NavLink
            to="/"
            exact="true"
            style={({ isActive }) => (isActive ? activeStyle : styles)}
            >
            Home
            </NavLink>
        ) : (
            <NavLink
            to="/contactcs"
            exact="true"
            style={({ isActive }) => (isActive ? activeStyle : styles)}
            >
            Phonebook
            </NavLink>
        )}
        </nav>
    );
};

export default Navigation;