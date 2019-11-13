import React, { useContext, useEffect, useState } from 'react';
import { Grid, Modal, Paper, Typography } from '@material-ui/core';
import Script from 'react-load-script';

import Playlists from './Playlists';
import Songs from './Songs';
import NowPlaying from './NowPlaying';

import { fetchPlaylistTracks, fetchUserPlaylists, makePrimaryPlayback } from '../scripts/api';
import useWindowDimensions from '../scripts/WindowDimensions';
import { GetNowPlayingDispatch, GetSongListDispatch, GlobalToken } from '../scripts/helpers';

import '../stylesheets/MainAppBody.scss';

const MainAppBody = props => {
    const { height, width } = useWindowDimensions();
    // subtract height of header + padding to make web app single page
    const heightWidthStyle = {
        height: height - 84,
        width: width - 84,
    };

    const token = useContext(GlobalToken);

    // Player Functions
    const [playbackState, setPlaybackState] = useState(null)

    const handleScriptCreate = () => {
        console.log("Script created");
    };

    const handleScriptError = () => {
        console.log("Script error");
    };

    const handleScriptLoad = () => {
        console.log("Script loaded");
    };

    const onStateChange = state => {
        setPlaybackState(state)
    };

    const handleLoadSuccess = (token) => {
        console.log("Script loaded success");
        const accessToken = `${token}`;
        const player = new window.Spotify.Player({
            name: 'Applotify, The Player',
            getOAuthToken: cb => { cb(accessToken); }
        });

        // Error handling
        player.addListener('initialization_error', ({ message }) => { console.error(message); });
        player.addListener('authentication_error', ({ message }) => { console.error(message); });
        player.addListener('account_error', ({ message }) => { console.error(message); });
        player.addListener('playback_error', ({ message }) => { console.error(message); });

        // Playback status updates
        player.addListener('player_state_changed', state => onStateChange(state));

        // Ready
        player.addListener('ready', ({ device_id } ) => {
            console.log('Ready with Device ID', device_id);
            makePrimaryPlayback(device_id, token);
        });

        // Not Ready
        player.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
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
        getPlaylists(token);
        window.onSpotifyPlayerAPIReady = () => {
            handleLoadSuccess(token);
        }
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
            <Script
                url="https://sdk.scdn.co/spotify-player.js"
                onCreate={handleScriptCreate}
                onError={handleScriptError}
                onLoad={handleScriptLoad}
            />
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
