import ReactDOM from 'react-dom';
import React from 'react';
import Playlists from '../components/Playlists';

const fakePlaylistData = [
    {
        id: 123456789,
        name: 'Test',
        tracks: {
            total: 10,
        },
        images: [
            {
                url: 'test.com',
            },
        ],
    },
];

it('renders the Playlists component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Playlists playlists={fakePlaylistData} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
