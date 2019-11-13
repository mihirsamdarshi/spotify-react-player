import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import NowPlaying from '../components/NowPlaying';

const { act } = TestRenderer;

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

it('should start with fake now playing data', async () => {
    await act(async() => {
        const component = await TestRenderer.create(<NowPlaying nowPlaying={fakeNowPlayingData} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
