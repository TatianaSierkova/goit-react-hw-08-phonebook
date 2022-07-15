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
        fontSize: 30,
        textAlign: 'center',
    },
    text: {
        fontSize: 17,
        textAlign: 'center',
    },
};

const HomePage = () => (
    <div style={styles.container}>
        <h1 style={styles.title}>Welcome to the PhoneBook☎️</h1>
        <span style={styles.text}>where you can store and manage your contacts</span>
    </div>
);

export default HomePage;