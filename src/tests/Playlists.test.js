import ReactDOM from 'react-dom';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Playlists from '../components/Playlists';
import { fakePlaylistData } from './utils';

const { act } = TestRenderer;

it('renders the Playlists component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Playlists playlists={fakePlaylistData} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should start with a playlist box', async () => {
    await act(async () => {
        const component = await TestRenderer.create(<Playlists playlists={fakePlaylistData} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
