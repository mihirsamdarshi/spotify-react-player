import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../stylesheets/MainAppBody.scss';
import {fetchPlaylistTracks, fetchUserPlaylists} from '../scripts/api';
import Playlists from "./Playlists";
import Songs from "./Songs"

export default function MainAppBody() {
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

    const getSongs = async link => {
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
        <div className={'root'}>
            <Grid container className={'gridContainer'}>
                <Grid item xs={4}>
                    <Paper className={'paper'} onClick={getPlaylists}>
                        {showPlaylists ? <Playlists playlists={playlistList} getSongFunc={getSongs}/> : null}
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={'paper'}>
                        {showSongs ? <Songs songs={songList}/> : null}
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className='paper nowPlaying'></Paper>
                </Grid>
            </Grid>
        </div>
    );
}