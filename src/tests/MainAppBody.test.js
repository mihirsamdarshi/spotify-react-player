import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import { Grid, Paper, Typography } from '@material-ui/core';
import MainAppBody from '../components/MainAppBody';

const { act } = TestRenderer;


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
    await act(async () => {
        const component = await TestRenderer.create(<MainAppBody />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('the MainAppBody', () => {
    it('should have four MUI Grid elements', async () => {
        await act(async () => {
            const component = await TestRenderer.create(<MainAppBody />);
            const componentCount = component.root.findAllByType(Grid).length;
            expect(componentCount).toBe(4);
        });
    });

    it('should have no MUI Paper elements', async () => {
        await act(async () => {
            const component = await TestRenderer.create(<MainAppBody />);
            const componentCount = component.root.findAllByType(Paper).length;
            expect(componentCount).toBe(0);
        });
    });

    it('should have one MUI Typography element', async () => {
        await act(async () => {
            const component = await TestRenderer.create(<MainAppBody />);
            const componentCount = component.root.findAllByType(Typography).length;
            expect(componentCount).toBe(1);
        });
    });

    it('should not have rendered the playlist component yet', async () => {
        await ReactTestUtils.act(async () => {
            ReactDOM.render(<MainAppBody />, container);
            const playlistComponent = container.querySelector('.playlistComponent');
            expect(playlistComponent !== null).toBe(false);
        });
    });

    it('should not have rendered the songs component', async () => {
        await ReactTestUtils.act(async () => {
            ReactDOM.render(<MainAppBody />, container);
            const songsComponent = container.querySelector('.songsComponent');
            expect(songsComponent !== null).toBe(false);
        });
    });

    it('should not have rendered the now playing component', async () => {
        await ReactTestUtils.act(async () => {
            ReactDOM.render(<MainAppBody />, container);
            const nowPlayingComponent = container.querySelector('.nowPlayingComponent');
            expect(nowPlayingComponent !== null).toBe(false);
        });
    });

    describe('upon clicking a Playlist', () => {
        it('should render a list of songs', async() => {
            await ReactTestUtils.act(async () => {
                ReactDOM.render(<MainAppBody />, container);
                const nowPlayingComponent = container.querySelector('.nowPlayingComponent');
                console.log(nowPlayingComponent);
            });
        });
    });
});
