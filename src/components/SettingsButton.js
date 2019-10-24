import React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import SettingsIcon from '@material-ui/icons/Settings';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import '../stylesheets/SettingsButton.scss';

export default function SettingsButton() {
    const [state, setState] = React.useState({
        open: false,
        playbackService: 'Spotify',
        playlistService: 'Apple Music',
    });

    const handleClickOpen = () => {
        setState({
            ...state,
            open: true
        });
    };

    const handleClose = () => {
        setState({
            ...state,
            open: false
        });
    };

    const handleSwitch = () => {
        const [newPLS, newPBS] = [state.playbackService, state.playlistService];
        setState({
            ...state,
            playbackService: newPBS,
            playlistService: newPLS
        });
    };

    return (
        <div>
            <Fab size="small" className="settingsButton" onClick={handleClickOpen}>
                <SettingsIcon/>
            </Fab>
            <Dialog open={state.open} onClose={handleClose} className="classes.modal">
                <DialogTitle>Change Current Service</DialogTitle>
                <DialogContent>
                    <div className="serviceDialogContainer">
                        <span>
                            Music Playlists Come From:
                            {' '}
                            {state.playlistService}
                        </span>
                        <span>
                            Music Plays From:
                            {' '}
                            {state.playbackService}
                        </span>
                    </div>
                    <Button className="handleSwitchButton" onClick={handleSwitch} color="primary">
                        Switch Services
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Exit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
