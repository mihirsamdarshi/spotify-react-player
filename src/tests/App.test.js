import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import SettingsButton from '../components/SettingsButton';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the Settings Button component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SettingsButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});
