import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#fff',
        backgroundColor: '#ffffff'
    }
}));

const AddItem = props => {
    const classes = useStyles();
    return (
        <>
        <TextField id="standard-basic" label="Standard" className={classes.root}/>
        </>
    )
    
}

export default AddItem;