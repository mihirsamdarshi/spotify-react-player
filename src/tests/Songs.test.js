import ReactDOM from 'react-dom';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Songs from '../components/Songs';
import { fakeSongsData } from './utils';

const { act } = TestRenderer;

it('renders the Songs component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Songs songs={fakeSongsData} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should start with a song box', async () => {
    await act(async() => {
        const component = await TestRenderer.create(<Songs songs={fakeSongsData}/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
