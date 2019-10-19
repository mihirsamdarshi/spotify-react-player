import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import '../stylesheets/SettingsButton.scss';

const useStyles = makeStyles((theme) => ({
    modal: {
        width: 200,
    },
    serviceDialogContainer: {
        display: 'flex',
        flexDirection: 'column',
        columnGap: 5,
        margin: 'auto',
        width: 300,
        paddingBottom: 15,
    },
    handleSwitchButton: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    menuButton: {
        marginLeft: 20,
        backgroundColor: "#fff",
    }
}));

export default function SettingsButton() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false,
        playbackService: 'Spotify',
        playlistService: 'Apple Music',
    });

    const handleClickOpen = () => {
        setState({...state, open: true});
    };

    const handleClose = () => {
        setState({...state, open: false});
    };

    const handleSwitch = () => {
        let newPLS;
        let
            newPBS;
        [newPLS, newPBS] = [state.playbackService, state.playlistService];
        setState({...state, playbackService: newPBS, playlistService: newPLS});
    };

    return (
        <div>
            <IconButton className={classes.menuButton} onClick={handleClickOpen}>
                <SettingsIcon/>
            </IconButton>
            <Dialog open={state.open} onClose={handleClose} className={classes.modal}>
                <DialogTitle>Change Current Service</DialogTitle>
                <DialogContent>
                    <div className={classes.serviceDialogContainer}>
                        <span>
                            Music Playlists Come From:
                            {state.playlistService}
                        </span>
                        <span>
                            Music Plays From:
                            {state.playbackService}
                        </span>
                    </div>
                    <Button className={classes.handleSwitchButton} onClick={handleSwitch} color="primary">
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
