import React from 'react';
import ReactDOM from 'react-dom';
import NowPlaying from '../components/NowPlaying';

const fakeNowPlayingData = {
    album: 'Test - The LP',
    img: {
        url: 'test.com',
    },
    artist: [
        {
            name: 'Testy McTestFace',
        },
    ],
};

it('renders the Now Playing component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NowPlaying nowPlaying={fakeNowPlayingData} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
