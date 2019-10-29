import ReactDOM from 'react-dom';
import React from 'react';
import AppHeader from '../components/AppHeader';

it('renders the App Header component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
});
