import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import KitchenIcon from '@material-ui/icons/Kitchen';

const useStyles = makeStyles((theme) => ({
    bottomNavStyles: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#6fc8a8',
        borderRadius: '10px',
        height: '80px',
        margin: 'auto',
        position: 'absolute',
        bottom: '10px',
        left: 0,
        right: 0,
        width: '300px',
        color: '#fff'
    },

    navButton: {
        color: "#fff",
        height: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 'none'
    },

    icon: {
        fontSize: '40px',

    },

    iconText: {
        textTransform: 'uppercase',
        margin: '5px 0',
        padding: '0'
    }
}))


const BottomNav = () => {
    const classes = useStyles();
    return (
        <div className={classes.bottomNavStyles}>
            <button type='button' className={classes.navButton}>
                <ListAltIcon className={classes.icon}/>
                <p className={classes.iconText}>List</p>
            </button>
            <button type='button' className={classes.navButton}>
                <RestaurantIcon className={classes.icon}/>
                <p className={classes.iconText}>Recipe</p>
            </button>
            <button type='button' className={classes.navButton}>
                <KitchenIcon className={classes.icon}/>
                <p className={classes.iconText}>Pantry</p>
            </button>
            
        </div>
    )
}

export default BottomNav
