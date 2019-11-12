const apiUrl = 'https://api.spotify.com/v1';

const HTTP_OK = 200;

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

const okCheck = statusCheck([HTTP_OK]);

const query = (resource, id, token) => fetch(`${apiUrl}/${resource}/${id}`,
    {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }).then(okCheck, emitNativeError)
    .then(response => response.json());

const fetchUserPlaylists = (token) => query('me/playlists', '', token);
const fetchPlaylistTracks = (id, token) => query('playlists',`${id}/tracks`, token);


export {
    fetchUserPlaylists,
    fetchPlaylistTracks
}
