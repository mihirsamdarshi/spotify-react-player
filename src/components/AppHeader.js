import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SettingsButton from './SettingsButton';

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
    appHeader: {
        backgroundColor: theme.palette.common.white,
    }
}));

export default function AppHeader() {
    const classes = useStyles();

    return (
        <div className={classes.appHeader}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Applotify
                    </Typography>
                    <SettingsButton/>
                </Toolbar>
            </AppBar>
        </div>
    );
}