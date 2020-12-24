import React from 'react';
import { useHistory, useLocation }from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import KitchenIcon from '@material-ui/icons/Kitchen';

import './style.css';

const useStyles = makeStyles((theme) => ({
    icon: {
        fontSize: '40px'
    }
}));


const BottomNav = () => {
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles();

    const _handleClick = (param) => {
        history.push(`/${param}`);
    }

    return (
        <div className={`bottomNavStyles ${
            location.pathname === '/list' || 
            location.pathname === '/recipe' ||
            location.pathname === '/pantry' ? 'page' : ''}`}>
            <button type='button' onClick={e => _handleClick('list')} 
            className={`navButton 
            ${location.pathname === '/list' && 'active'}
            ${
                location.pathname === '/recipe' ||
                location.pathname === '/pantry' ? 'page' : ''
            }`}>
                <ListAltIcon className={classes.icon}/>
                <p className={`iconText ${
            location.pathname === '/list' || 
            location.pathname === '/recipe' ||
            location.pathname === '/pantry' ? 'page' : ''}`}>List</p>
            </button>
            <button type='button' onClick={e => _handleClick('recipe')} className={`navButton 
            ${location.pathname === '/recipe' && 'active'}
            ${
                location.pathname === '/list' ||
                location.pathname === '/pantry' ? 'page' : ''
            }`}>
                <RestaurantIcon className={classes.icon}/>
                <p className={`iconText ${
            location.pathname === '/list' || 
            location.pathname === '/recipe' ||
            location.pathname === '/pantry' ? 'page' : ''}`}>Recipe</p>
            </button>
            <button type='button' onClick={e => _handleClick('pantry')} className={`navButton 
            ${location.pathname === '/pantry' && 'active'}
            ${
                location.pathname === '/recipe' ||
                location.pathname === '/list' ? 'page' : ''
            }`}>
                <KitchenIcon className={classes.icon}/>
                <p className={`iconText ${
            location.pathname === '/list' || 
            location.pathname === '/recipe' ||
            location.pathname === '/pantry' ? 'page' : ''}`}>Pantry</p>
            </button>
        </div>
    )
}

export default BottomNav
