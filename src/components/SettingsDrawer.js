import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function SettingsDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false,
        playbackService: 'Spotify',
        playlistService: 'Apple Music'
    });

    const handleClickOpen = () => {
        setState({...state, open: true});
    };

    const handleClose = () => {
        setState({...state, open: false});
    };

    const handleSwitch = () => {
        let newPLS, newPBS;
        [newPLS, newPBS] = [state.playbackService, state.playlistService];
        setState({...state, playbackService: newPBS, playlistService: newPLS});
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen} className={classes.button}>
                <SettingsIcon/>
            </IconButton>
            <Dialog open={state.open} onClose={handleClose}>
                <DialogTitle>Change Current Service</DialogTitle>
                <DialogContent>
                    Music Playlists From: {state.playlistService}
                    <br/>
                    Music Playback From: {state.playbackService}
                    <Button onClick={handleSwitch} color="primary">
                        Switch Playback and Playlist Services
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




