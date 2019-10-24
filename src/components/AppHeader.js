import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SettingsButton from './SettingsButton';
import '../stylesheets/AppHeader.scss';

export default function AppHeader() {
    return (
        <div className="appHeader">
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" className="title">
                        Applotify
                    </Typography>
                    <SettingsButton className="settingsButton"/>
                </Toolbar>
            </AppBar>
        </div>
    );
}
