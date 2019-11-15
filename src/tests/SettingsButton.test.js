import ReactDOM from 'react-dom';
import SettingsButton from '../components/SettingsButton';
import React from 'react';
import { shallow } from 'enzyme';

it('renders the Settings Button component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SettingsButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should match the snapshot', () => {
        const component = shallow(<SettingsButton />);
        expect(component).toMatchSnapshot();
});
