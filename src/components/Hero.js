import React from 'react';
import '../stylesheets/Hero.scss';

const Hero = (props) => (
    <div className="fillWindow">
        <div className="heroInfo">
            <h1> Applotify </h1>
            <h3> Play Spotify Playlists&#42; </h3>
        </div>
        <div className="centeredBtn">
            <button type="submit" className="spotifyLoginBtn" onClick={() => props.login(true)}>
                Login With Spotify
            </button>
        </div>

        <p className="asterisk"> &#42; only available in Chrome and Firefox browsers due to Spotify API limitations</p>
    </div>
);

export default Hero;
