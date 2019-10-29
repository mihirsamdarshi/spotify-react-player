import ReactDOM from 'react-dom';
import React from 'react';
import Hero from '../components/Hero';

it('renders the Hero component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hero />, div);
    ReactDOM.unmountComponentAtNode(div);
});
