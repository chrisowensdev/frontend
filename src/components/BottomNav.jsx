import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import KitchenIcon from '@material-ui/icons/Kitchen';

const useStyles = makeStyles((theme) => ({
    icon: {
        fontSize: '40px',

    },

    iconText: {
        textTransform: 'uppercase',
        margin: '5px 0',
        padding: '0'
    }
}))

const BottomNavDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #6fc8a8;
    border-radius: 10px;
    height: 80px;
    margin: auto;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    width: 300px;
    color: #fff;
`;

const NavButton = styled.div`
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center
`;

const BottomNav = () => {
    const classes = useStyles();
    return (
        <BottomNavDiv>
            <NavButton>
                <AddCircleOutlineIcon className={classes.icon}/>
                <p className={classes.iconText}>Add</p>
            </NavButton>
            <NavButton>
                <ListAltIcon className={classes.icon}/>
                <p className={classes.iconText}>List</p>
            </NavButton>
            <NavButton>
                <RestaurantIcon className={classes.icon}/>
                <p className={classes.iconText}>Recipe</p>
            </NavButton>
            <NavButton>
                <KitchenIcon className={classes.icon}/>
                <p className={classes.iconText}>Pantry</p>
            </NavButton>
            
        </BottomNavDiv>
    )
}

export default BottomNav
