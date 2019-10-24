import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../stylesheets/MainAppBody.scss';
import {fetchPlaylistTracks, fetchUserPlaylists} from '../scripts/api';
import Playlists from './Playlists';
import Songs from './Songs';
import useWindowDimensions from '../scripts/WindowDimensions';

export default function MainAppBody() {
    const [showPlaylists, setShowPlaylists] = useState(false);
    const [showSongs, setShowSongs] = useState(false);
    const [userId, setUserId] = useState('');
    const [playlistList, setPlaylistList] = useState('');
    const [songList, setSongList] = useState('');
    const [errorString, setError] = useState(null);

    const {height, width} = useWindowDimensions();
    // subtract height of header + padding to make web app single page
    const heightWidthStyle = {
        height: height - 84,
        width: width - 84,
    };

    const getPlaylists = async () => {
        setError(null);
        try {
            const result = await fetchUserPlaylists();
            setUserId(result.href);
            setPlaylistList(result.items);
            setShowPlaylists(true);
        } catch (error) {
            setError('Sorry, but something went wrong.');
        }
    };

    const getSongs = async (link) => {
        setError(null);

        try {
            const result = await fetchPlaylistTracks(link);
            setSongList(result.tracks.items);
            setShowSongs(true);
        } catch (error) {
            setError('Sorry, but something went wrong.');
        }
    };

    useEffect(() => {
        console.log('hello'); // eslint-disable-line
    }, []);

    return (
        <div className="root">
            <Grid container className="gridContainer">
                <Grid item xs={4} style={heightWidthStyle}>
                    <Paper className="paper" onClick={getPlaylists}>
                        {showPlaylists && !errorString
                            ? <Playlists playlists={playlistList} getSongFunc={getSongs}/>
                            : <p>{errorString}</p>}
                    </Paper>
                </Grid>
                <Grid item xs={4} style={heightWidthStyle}>
                    {showSongs
                        ? (
                            <Paper className="paper">
                                <Songs songs={songList}/>
                            </Paper>
                        )
                        : null}
                </Grid>
                <Grid item xs={4} style={heightWidthStyle}>
                    {showSongs
                        ? <Paper className="paper nowPlaying"/>
                        : null}
                </Grid>
            </Grid>
        </div>
    );
}
