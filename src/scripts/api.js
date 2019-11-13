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
    .then(response => response.json());

const playerAction = (action, uri, deviceId, token) => fetch(`${playerUrl}/${action}?device_id=${deviceId}`, {
    method: 'PUT',
    body: `{"uris": ["${uri}"]}`,
    headers: {
        'Authorization': `Bearer ${token}`,
    }
}).then(okCheck, emitNativeError)
.then(data => console.log(data));

const fetchUserPlaylists = (token) => query('me/playlists', '', token);
const fetchPlaylistTracks = (id, token) => query('playlists',`${id}/tracks`, token);



export {
    fetchUserPlaylists,
    fetchPlaylistTracks,
}
