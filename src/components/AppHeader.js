import React from 'react';
import '../stylesheets/AppHeader.css';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';
import SettingsButton from './SettingsButton';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function AppHeader() {
    const classes = useStyles();

    return (
        <div className="app_header">
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src="/src/assets/logo.png" alt="logo"/>
                    </IconButton>
                    <h2>Applotify</h2>
                    <SettingsButton/>
                </Toolbar>
            </AppBar>
        </div>
    );
}
