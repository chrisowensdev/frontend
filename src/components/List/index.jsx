import React from 'react'
import './style.css';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';

import PageTitle from '../PageTitle';

const useStyles = makeStyles((theme) => ({
    icon: {
        fontSize: '40px',
        color: '#fff'
    }
}));

const List = () => {
    const classes = useStyles();
    return (
        <div className='container'>
            <PageTitle page='List'/>
            <div className="list-container">
                <div className="list-item">
                    <p>Milk</p>
                    <ArrowDropDownIcon className={classes.icon}/>
                </div>
                <div className="list-item">
                    <p>Orange Juice</p>
                    <ArrowDropDownIcon className={classes.icon}/>
                </div>
                <div className="list-item">
                    <p>Tortillas</p>
                    <ArrowDropDownIcon className={classes.icon}/>
                </div>
                <div className="list-item">
                    <p>Milk</p>
                    <ArrowDropDownIcon className={classes.icon}/>
                </div>
                <div className="list-item">
                    <p>Milk</p>
                    <ArrowDropDownIcon className={classes.icon}/>
                </div>
                <div className="list-item">
                    <p>Milk</p>
                    <ArrowDropDownIcon className={classes.icon}/>
                </div>
                <div className="list-item">
                    <p>Milk</p>
                    <ArrowDropDownIcon className={classes.icon}/>
                </div>
                <div className="list-item">
                    <p>Milk</p>
                    <ArrowDropDownIcon className={classes.icon}/>
                </div>
                <div className="list-item">
                    <p>Milk</p>
                    <ArrowDropDownIcon className={classes.icon}/>
                </div>
                <div className="list-item">
                    <p>Milk</p>
                    <ArrowDropDownIcon className={classes.icon}/>
                </div>
            </div>
        </div>
    )
}

export default List;