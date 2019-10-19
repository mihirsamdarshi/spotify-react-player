import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import '../stylesheets/MainAppBody.css';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    cards: {
        padding: 15,
    },
}));

export default function MainAppBody() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2} className={classes.cards}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>xs=4</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>xs4</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>xs=4</Paper>
                </Grid>
            </Grid>
        </div>
    );
}