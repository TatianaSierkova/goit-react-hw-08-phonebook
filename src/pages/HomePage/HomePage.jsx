import React from 'react';
//import { Link } from 'react-router-dom';

const styles = {
    container: {
        minHeight: '75vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
        padding: '10px',
    },
    title: {
        fontWeight: 500,
        fontSize: 36,
        textAlign: 'center',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
    link: {
        fontWeight: 500,
        fontSize: 24,
        textAlign: 'center',
        borderBottom: '1px solid #000000',
    },
};

const HomePage = () => (
    <div style={styles.container}>
        <h1 style={styles.title}>PhoneBook☎️servise</h1>
        <span style={styles.text}>SignIn</span>
    </div>
);

export default HomePage;