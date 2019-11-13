const apiUrl = 'https://api.spotify.com/v1';
const playerUrl = `${apiUrl}/me/player`;

const HTTP_OK = 200;
const NO_CONTENT_SUCCESS = 204;

const throwResponseError = response => {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
};

const emitNativeError = error => {
    throw error;
};

const statusCheck = successStatuses => response => {
    if (successStatuses.includes(response.status)) {
        return response;
    } else {
        throwResponseError(response);
    }
};

const okCheck = statusCheck([HTTP_OK, NO_CONTENT_SUCCESS]);

const query = (resource, id, token) => fetch(`${apiUrl}/${resource}/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }).then(okCheck, emitNativeError)
    .then(response => response.json())

const fetchUserPlaylists = (token) => query('me/playlists', '', token);
const fetchPlaylistTracks = (id, token) => query('playlists',`${id}/tracks`, token);

const makePrimaryPlayback = (id, token) => {
    fetch(playerUrl, {
        method: "PUT",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "device_ids": [ id ],
            "play": true,
        }),
    });
};

const playerActions = (action, token, data) => {
    let bodyString = '';
    let httpMethod = ''
    switch (action) {
    case 'play':
        bodyString = `{"uris": ["${data}"]}`;
        httpMethod = 'PUT';
        break;
    case 'pause':
        httpMethod = 'PUT';
        break;
    case 'next':
        httpMethod = 'POST';
        break;
    case 'previous':
        httpMethod = 'POST';
        break;
    }
    fetch(`${playerUrl}/${action}`, {
        method: httpMethod,
        body: bodyString,
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }).then(okCheck, emitNativeError)
        .then(data => console.log(data));
};

const playSong = (data, token) => playerActions('play', token, data);
const pauseSong = token => playerActions('pause', token);
const nextSong = token => playerActions('next', token);
const previousSong = token => playerActions('previous', token);

export {
    fetchUserPlaylists,
    fetchPlaylistTracks,
    makePrimaryPlayback,
    playSong,
    pauseSong,
    nextSong,
    previousSong
}
