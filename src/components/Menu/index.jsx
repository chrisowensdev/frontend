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
        border: 'none'
    },
    menuIcon: {
        fontSize: '40px',
        color: '#fff',
        padding: '5px'
    }
}))

const _handleClick = (e) => {
    e.preventDefault();

}

const Menu = () => {
    const classes = useStyles();
    return (
        <div className={classes.navDiv}>
            <button className={classes.menuButton} onClick={e => _handleClick(e)}>
            <MenuIcon className={classes.menuIcon}/>
            </button>
        </div>
    )
}

export default Menu
