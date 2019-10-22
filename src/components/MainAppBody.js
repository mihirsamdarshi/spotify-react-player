import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../stylesheets/MainAppBody.scss';
import {fetchPlaylistTracks, fetchUserPlaylists} from '../scripts/api';
import Playlists from "./Playlists";
import Songs from "./Songs"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#ffffff',
    },
    cards: {
        padding: [0, 15, 0],
    },
    songs: {}
}));

export default function MainAppBody() {
    const classes = useStyles();
    const [showPlaylists, setShowPlaylists] = useState(false);
    const [showSongs, setShowSongs] = useState(false);
    const [userId, setUserId] = useState('');
    const [playlistList, setPlaylistList] = useState('');
    const [songList, setSongList] = useState('');
    const [error, setError] = useState(null);

    const getPlaylists = async event => {
        event.preventDefault();

        setError(null);

        try {
            const result = await fetchUserPlaylists();
            setUserId(result.href);
            setPlaylistList(result.items);
            setShowPlaylists(true);
        } catch (error) {
            setError('Sorry, but something went wrong.')
        }
    };

    const getSongs = async event => {
        console.log("HELLO WORLD")
        event.preventDefault();

        setError(null);

        try {
            const result = await fetchPlaylistTracks();
            setSongList(result.tracks.items);
            setShowSongs(true);
        } catch (error) {
            setError('Sorry, but something went wrong.')
        }
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={2} className={classes.cards}>
                <Grid item xs={4}>
                    <Paper className={classes.paper} onClick={getPlaylists}>
                        {showPlaylists ? <Playlists playlists={playlistList} getSongFunc={getSongs}/> : null}
                    </Paper>
                </Grid>
                <Grid item xs={4} className={classes.songs}>
                    <Paper className={classes.paper}>
                        {showSongs ? <Songs songs={songList}/> : null}
                    </Paper>
                </Grid>
                <Grid item xs={4} className={classes.songs}>
                    <Paper className={classes.paper}></Paper>
                </Grid>
            </Grid>
        </div>
    );
}