import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Playlists from './Playlists';
import Songs from './Songs';
import { fetchPlaylistTracks, fetchUserPlaylists } from '../scripts/api';
import useWindowDimensions from '../scripts/WindowDimensions';
import { GetNowPlayingDispatch, GetSongListDispatch } from '../scripts/callbacks';
import '../stylesheets/MainAppBody.scss';
import NowPlaying from './NowPlaying';


const MainAppBody = () => {
    const [showPlaylists, setShowPlaylists] = useState(false);
    const [showSongs, setShowSongs] = useState(false);
    const [showNowPlaying, setShowNowPlaying] = useState(false);
    const [userId, setUserId] = useState('');
    const [playlistList, setPlaylistList] = useState('');
    const [songList, setSongList] = useState('');
    const [songPlaying, setSongPlaying] = useState('')
    const [errorString, setError] = useState(null);

    const { height, width } = useWindowDimensions();
    // subtract height of header + padding to make web app single page
    const heightWidthStyle = {
        height: height - 84,
        width: width - 84,
    };

    // Getter Functions
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
            setSongList(result.items);
            setShowSongs(true);
        } catch (error) {
            setError('Sorry, but something went wrong.');
        }
    };

    const getNowPlaying = (value) => {
        setSongPlaying(value);
        setShowNowPlaying(true);
    };

    // Display Functions
    const numPlaylists = () => (
        <div className="numTracksWrapper">
            <Typography className="playlistsAvailable">
                {`${playlistList.length} playlists available`}
            </Typography>
        </div>
    );

    const numSongs = () => (
        <div className="numTracksWrapper">
            <Typography className="playlistsAvailable">
                {`${songList.length} songs available`}
            </Typography>
        </div>
    );

    const displayPlaylists = () => (
        <GetSongListDispatch.Provider value={getSongs}>
            <Playlists playlists={playlistList} />
        </GetSongListDispatch.Provider>
    );

    const displayError = () => (
        <Modal open>
            <p>{errorString}</p>
        </Modal>
    );

    const displaySongs = () => (
        <Paper className="paper" style={blackOverride}>
            <GetNowPlayingDispatch.Provider value={getNowPlaying}>
                <Songs songs={songList} />
            </GetNowPlayingDispatch.Provider>
        </Paper>
    );

    const displayNowPlaying = () => (
        <div className="paper">
            <NowPlaying nowPlaying={songPlaying} />
        </div>
    );

    // OnLoad Functions
    useEffect(() => {
        getPlaylists();
    }, []);

    // Handler Functions
    const handleSongListClose = () => {
        if (showSongs && !showNowPlaying) {
            setShowSongs(false);
        }
    };

    // Style Override Object
    const blackOverride = {
        backgroundColor: '#EEE',
    };

    return (
        <div className="root">
            <Grid container className="gridContainer">
                <Grid item xs={4} style={heightWidthStyle}>
                    <Paper className="paper" style={blackOverride}>
                        {showPlaylists && !errorString ? displayPlaylists() : displayError()}
                    </Paper>
                </Grid>
                <Grid item xs={4} style={heightWidthStyle}>
                    {showSongs ? displaySongs() : numPlaylists()}
                </Grid>
                <Grid item xs={4} style={heightWidthStyle} onClick={handleSongListClose}>
                    {showNowPlaying ? displayNowPlaying() : null}
                    {!showNowPlaying && showSongs ? numSongs() : null}
                </Grid>
            </Grid>
        </div>
    );
};

export default MainAppBody;
