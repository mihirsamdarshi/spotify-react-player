import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from '../components/AppHeader';
import TestRenderer from 'react-test-renderer';

const { act } = TestRenderer;

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should match the component', () => {
    const component = TestRenderer.create(<AppHeader />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
