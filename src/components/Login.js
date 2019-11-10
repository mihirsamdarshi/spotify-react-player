import React, { useEffect } from 'react';


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

// Get the hash of the url
const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function(initial, item) {
        if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {});
window.location.hash = "";

const Login = () => {
    const getHash = () => {
        // Set token
        let _token = hash.access_token;
        if (_token) {
            // Set token
            this.setState({
                token: _token
            });
        }
    };

    useEffect(() => {
        getHash();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                {!this.state.token && (
                    <a
                        className="btn btn--loginApp-link"
                        href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                    >
                        Login to Spotify
                    </a>
                )}
            </header>
        </div>
    );
};

export default Login;
