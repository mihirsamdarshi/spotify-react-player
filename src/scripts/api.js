let userLoggedInApiUrl = 'https://api.spotify.com/v1/me/'

const apiHost = host => { api = host };
const urlFor = resource => `${api}${resource}`;

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

const query = (resource, params, token) => fetch(`${userLoggedInApiUrl}/${resource}/${params}`,
    {
        headers: {
            'Authorization': token,
        }
    }).then(okCheck, emitNativeError)
    .then(response => response.json());

const fetchUserPlaylists = token => query('playlists', '', token);
const fetchPlaylistTracks = (params, token) => query('playlists',`${params}/tracks`, token);


export {
    apiHost,
    fetchUserPlaylists,
    fetchPlaylistTracks
}
