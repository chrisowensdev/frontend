import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import Menu from './Menu';
import BottomNav from './BottomNav';

const useStyles = makeStyles((theme) => ({
    homeDiv: {
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: '45px',
        fontFamily: 'Spartan',
        fontWeight: '800',
        color: "#6fc8a8",
        textTransform: 'uppercase',
        textAlign: 'left',
        width: '80%',
        margin: '20px auto'
    }
}))

const HomeImage = styled.img`
    height: 200px;
    width: 300px;
`;

const Home = () => {
    const classes = useStyles();
    return (
        <>
        <Menu />
        <div className={classes.homeDiv}>
            <h1 className={classes.title}>Organize <br/>My Pantry</h1>

            <HomeImage
            src='https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
            alt='groceries'
            />
        </div>
        <BottomNav />
        </>
    )
}

export default Home;


