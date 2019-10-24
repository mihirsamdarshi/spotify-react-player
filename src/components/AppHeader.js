import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SettingsButton from './SettingsButton';

export default function AppHeader() {
    return (
        <div className="appHeader">
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" className="title">
                        Applotify
                    </Typography>
                    <SettingsButton/>
                </Toolbar>
            </AppBar>
        </div>
    );
}
