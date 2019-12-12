import React, { useContext, useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { Modal } from 'react-bootstrap';
import Script from 'react-load-script';

import Playlists from './Playlists';
import Songs from './Songs';
import NowPlaying from './NowPlaying';
import ScrollWheel from './ScrollWheel';

import { fetchPlaylistTracks, fetchUserPlaylists, makePrimaryPlayback, playSong, } from '../scripts/api';

import useWindowDimensions from '../scripts/WindowDimensions';
import { GetNowPlayingDispatch, GetSongListDispatch, GlobalToken } from '../scripts/helpers';

import '../stylesheets/MainAppBody.scss';

const MainAppBody = () => {
    const { height, width } = useWindowDimensions();
    // subtract height of header + padding to make web app single page
    const heightWidthStyle = {
        height: height - 84,
        width: width - 84,
    };

    const token = useContext(GlobalToken);

    // Player Functions
    const [playbackState, setPlaybackState] = useState(null);

    const handleScriptCreate = () => {
        console.log('Script created');
    };

    const handleScriptError = () => {
        console.log('Script error');
    };

    const handleScriptLoad = () => {
        console.log('Script loaded');
    };

    const onStateChange = (state) => {
        setPlaybackState(state);
        // console.log(playbackState); //eslint-disable-line
    };

    const handleLoadSuccess = (token) => {
        console.log('Script loaded success');
        const accessToken = `${token}`;
        const player = new window.Spotify.Player({
            name: 'Applotify, The Player',
            getOAuthToken: (cb) => { cb(accessToken); },
        });

        // Error handling
        player.addListener('initialization_error', ({ message }) => { setError(message); });
        player.addListener('authentication_error', ({ message }) => { setError(message); });
        player.addListener('account_error', ({ message }) => { setError(message); });
        player.addListener('playback_error', ({ message }) => { setError(message); });

        // Playback status updates
        player.addListener('player_state_changed', (state) => onStateChange(state));

        // Ready
        player.addListener('ready', async (data) => {
            const { device_id } = data;
            console.log('Ready with Device ID', device_id); //eslint-disable-line
            makePrimaryPlayback(device_id, token);
        });

        // Not Ready
        player.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id); //eslint-disable-line
        });

        // Connect to the player!
        player.connect();
    };
    // thanks https://stackoverflow.com/questions/54469738/adding-a-js-function-to-reactjs-spotify-web-playback-sdk

    // Getter Functions
    const [showPlaylists, setShowPlaylists] = useState(false);
    const [showSongs, setShowSongs] = useState(false);
    const [showNowPlaying, setShowNowPlaying] = useState(false);
    const [playlistList, setPlaylistList] = useState('');
    const [songList, setSongList] = useState('');
    const [songPlaying, setSongPlaying] = useState('');
    const [errorString, setError] = useState(null);
    const [selectedPlaylist, setSelectedPlaylist] = useState('');
    const [angle, setAngle] = useState(0);

    const getPlaylists = async (token) => {
        setError(null);
        try {
            const result = await fetchUserPlaylists(token);
            setPlaylistList(result.items);
            setShowPlaylists(true);
        } catch (error) {
            setError(`Sorry, but something went wrong.\n ${error}`);
        }
    };

    const getSongs = async (link, token) => {
        setError(null);
        try {
            const result = await fetchPlaylistTracks(link, token);
            setSongList(result.items);
            setShowSongs(true);
        } catch (error) {
            setError(`Sorry, but something went wrong.\n ${error}`);
        }
    };

    const getNowPlaying = (value) => {
        try {
            playSong(value.uri, token);
            setSongPlaying(value);
            setShowNowPlaying(true);
        } catch (error) {
            setError(`Sorry, but something went wrong.\n ${error}`);
        }
        // TODO: figure out how to do play, pause, previous, etc. from here
    };

    // Style Override Object
    const blackOverride = {
        backgroundColor: '#EEE',
    };

    // Display Functions
    const displayNumPlaylists = () => (
        <div className="numTracksWrapper">
            <Typography className="playlistsAvailable">
                {`${playlistList.length} playlists available`}
            </Typography>
        </div>
    );

    const displayNumSongs = () => (
        <div className="numTracksWrapper">
            <Typography className="playlistsAvailable">
                {`${songList.length} songs available`}
            </Typography>
        </div>
    );

    const displayPlaylists = () => (
        <Paper className="paper playlistComponent" style={blackOverride}>
            <GetSongListDispatch.Provider value={getSongs}>
                <Playlists playlists={playlistList} selected={selectedPlaylist} />
            </GetSongListDispatch.Provider>
        </Paper>
    );

    const displayError = () => (
        <Modal>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{errorString}</p>
            </Modal.Body>
        </Modal>
    );

    const displaySongs = () => (
        <Paper className="paper songsComponent" style={blackOverride}>
            <GetNowPlayingDispatch.Provider value={getNowPlaying}>
                <Songs songs={songList} />
            </GetNowPlayingDispatch.Provider>
        </Paper>
    );

    const displayNowPlaying = () => (
        <div className="paper nowPlayingComponent">
            <NowPlaying nowPlaying={songPlaying} />
        </div>
    );

    // OnLoad Functions
    useEffect(() => {
        getPlaylists(token);
    }, [token]);

    useEffect(() => {
        window.onSpotifyPlayerAPIReady = () => {
            handleLoadSuccess(token);
        };
    }, []);

    // Handler Functions
    const handleSongListClose = () => {
        if (showSongs && !showNowPlaying) {
            setShowSongs(false);
        }
    };

    // const selectedPlaylist = ......(angle)
    return (
        <div className="root">
            <Script
                url="https://sdk.scdn.co/spotify-player.js"
                onCreate={handleScriptCreate}
                onError={handleScriptError}
                onLoad={handleScriptLoad}
            />
            <Grid container className="gridContainer">
                {errorString ? displayError() : null}
                <Grid item xs={4} style={heightWidthStyle}>
                    {showPlaylists ? displayPlaylists() : null}
                </Grid>
                <Grid item xs={4} style={heightWidthStyle}>
                    {showSongs ? displaySongs() : displayNumPlaylists()}
                </Grid>
                <Grid item xs={4} style={heightWidthStyle} onClick={handleSongListClose}>
                    {showNowPlaying ? displayNowPlaying() : null}
                    {!showNowPlaying && showSongs ? displayNumSongs() : null}
                </Grid>
                <ScrollWheel dragHandler={setAngle} snapAngle={45} startPos={'top'}/>
            </Grid>
        </div>
    );
};

export default MainAppBody;
