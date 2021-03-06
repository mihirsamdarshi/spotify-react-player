import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { Grid, Paper, Typography } from '@material-ui/core';
import sinon from 'sinon';
import * as api from '../scripts/api';
import MainAppBody from '../components/MainAppBody';
import { bodyPlaylistData } from './utils';

// This test suite uses a distinct testing technique called _snapshot testing_. Go take
// a peek at the code then come back here for more commentary.
//
// Note how, with snapshot testing, you are truly dependent on that descriptive text.
// The enforcement is in the snapshot match, not a condition that is in the test code.
// This is where snapshot testing differs from traditional test-driven development:
// _It assumes that the code works initially._ This actually does line up fairly well
// with user interface development, because it tends to be easier to just “eyeball” a
// user interface first rather than write tests against it.
//
// It takes some adjustment to start “trusting” a snapshot test, just as it takes some
// adjustment to trust version control. If you want to manually check whether a snapshot
// is truly in the state that you want it to be, you can always look at the .snap file
// within the __snapshots__ folder.
//
// Handy reference:
// https://semaphoreci.com/community/tutorials/snapshot-testing-react-components-with-jest
//
let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('renders the Main App Body component', async () => {
    await ReactTestUtils.act(async () => {
        ReactDOM.render(<MainAppBody />, container);
    });
});

it('should start with a list of playlists', async () => {
    await ReactTestUtils.act(async () => {
        const component = await mount(<MainAppBody />);
        expect(component).toMatchSnapshot();
    });
});

describe('the MainAppBody', () => {
    let component;

    beforeEach(async() => {
        await ReactTestUtils.act(async () => {
            component = await mount(<MainAppBody />);
        });
    });

    afterEach(() => {
        component.unmount();
    });


    it('should have four MUI Grid elements', async () => {
        expect(component.find(Grid)).toHaveLength(4);
    });

    it('should have no MUI Paper elements', async () => {
        expect(component.find(Paper)).toHaveLength(0);
    });

    it('should have one MUI Typography element', async () => {
        expect(component.find(Typography)).toHaveLength(1);
    });

    it('should not have rendered the playlist component yet', async () => {
        expect(component.find('.playlistComponent')).toHaveLength(0);
    });

    it('should not have rendered the songs component', async () => {
        expect(component.find('.songsComponent')).toHaveLength(0);

    });

    it('should not have rendered the now playing component', async () => {
        expect(component.find('.nowPlayingComponent')).toHaveLength(0);
    });

    describe('upon clicking a Playlist', () => {

        it('should render a list of songs', async() => {
            const div = document.createElement('div');
            sinon.stub(api, 'fetchUserPlaylists');
            api.fetchUserPlaylists.returns(Promise.resolve(bodyPlaylistData));
            await ReactTestUtils.act(async () => {
                await ReactDOM.render(<MainAppBody />, div);
                const playlist = div.querySelector('.playlistComponent');
                expect(playlist).toBeNull();
            })
        });
    });
});
