import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    navDiv: {
        position: 'absolute',
        top: '5px',
        right: '5px'
    },
    menuButton: {
        backgroundColor: '#6fc8a8',
        borderRadius: '10px',
    },
    menuIcon: {
        fontSize: '40px',
        color: '#fff',
        padding: '5px'
    }
}))

const Menu = () => {
    const classes = useStyles();
    return (
        <div className={classes.navDiv}>
            <div className={classes.menuButton}>
            <MenuIcon className={classes.menuIcon}/>
            </div>
        </div>
    )
}

export default Menu
