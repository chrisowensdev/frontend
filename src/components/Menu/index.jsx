import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import './style.css';

const useStyles = makeStyles((theme) => ({
    menuIcon: {
        fontSize: '30px',
        padding: '3px 0px',
        margin: 0
    }
}))




const Menu = () => {
    const [active, setActive] = useState('open-menu');
    const classes = useStyles();

    const _handleClick = (e) => {
        e.preventDefault();
        if (active === 'open-menu'){
            setActive('open-menu active');
        } else {
            setActive('open-menu');
        }
    }
    return (
        <div className='navDiv'>
            <button className='menuButton' onClick={e => _handleClick(e)}>
            <MenuIcon className={classes.menuIcon}/>
            </button>
            <div className={active}>

            </div>
        </div>
    )
}

export default Menu
