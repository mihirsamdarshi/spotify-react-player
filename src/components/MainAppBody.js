import React, { useEffect, useState } from 'react';
import { Grid, Modal, Paper, Typography } from '@material-ui/core';
import Playlists from './Playlists';
import Songs from './Songs';
import { fetchPlaylistTracks, fetchUserPlaylists } from '../scripts/api';
import useWindowDimensions from '../scripts/WindowDimensions';
import { GetNowPlayingDispatch, GetSongListDispatch } from '../scripts/callbacks';
import '../stylesheets/MainAppBody.scss';
import NowPlaying from './NowPlaying';


const MainAppBody = props => {
    const [showPlaylists, setShowPlaylists] = useState(false);
    const [showSongs, setShowSongs] = useState(false);
    const [showNowPlaying, setShowNowPlaying] = useState(false);
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
    const getPlaylists = async (token) => {
        setError(null);
        try {
            const result = await fetchUserPlaylists(token);
            setPlaylistList(result.items);
            setShowPlaylists(true);
        } catch (error) {
            setError('Sorry, but something went wrong.');
        }
    };

    const getSongs = async (link, token) => {
        console.log(link);
        console.log(token);
        setError(null);
        try {
            const result = await fetchPlaylistTracks(link, token);
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
            <Playlists playlists={playlistList} token={props.token} />
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
        getPlaylists(props.token);
    }, [props]); //es

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
