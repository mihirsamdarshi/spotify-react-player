import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../stylesheets/AppHeader.scss';

const AppHeader = () => {
    const blackOverride = {
        backgroundColor: 'black',
    };

    return (
        <AppBar position="static" style={blackOverride}>
            <Toolbar>
                <Typography variant="h6" className="title">
                    Applotify
                </Typography>
                {/* not neeeded until adding Apple Music/SoundCloud
                    <SettingsButton className="settingsButton" />
                */}
            </Toolbar>
        </AppBar>
    );
};

export default AppHeader;
