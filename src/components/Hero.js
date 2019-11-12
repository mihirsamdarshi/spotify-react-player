import React, { useContext, useEffect } from 'react';
import '../stylesheets/Hero.scss';
import { isEmpty } from 'lodash';
import { SetLoginDispatch } from '../scripts/callbacks';

const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = "ccc1ea71746a4d4ea8468a7cc7d1d9f0";
const redirectUri = "http://localhost:3000";
const scopes = [
    "user-read-private",
    "user-modify-playback-state",
    "streaming",
    "user-read-currently-playing",
    "user-read-playback-state",
];

const Hero = props => {
    // from Spotify API example
    const getHashParams = () => {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    };

    const setAccessToken = useContext(SetLoginDispatch);

    useEffect(() => {
        const token = getHashParams();
        if (!isEmpty(token)) {
            setAccessToken(token);
        }
    }, [setAccessToken]);

    return (
        <div className="fillWindow">
            <div className="heroInfo">
                <h1> Applotify </h1>
                <h3> Play Spotify Playlists&#42; </h3>
            </div>
            <div className="centeredBtn">
                <a
                    className="spotifyLoginBtn"
                    href={`${authEndpoint}?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show_dialog=true`}
                >
                    Login With Spotify
                </a>
            </div>

            <p className="asterisk"> &#42; only available in Chrome and Firefox browsers and to users with Spotify Premium due to Spotify API limitations</p>
        </div>
    )
};

export default Hero;
