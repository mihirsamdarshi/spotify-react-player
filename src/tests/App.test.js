import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import App from '../components/App';
import Hero from '../components/Hero';
import MainAppBody from '../components/MainAppBody';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('matches the snapshot', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
});

describe('the App', () => {
    it('should render Hero if no token present', () => {
        const wrapper = mount(<App />);
        global.window = Object.create(window);
        const url = '';
        Object.defineProperty(window, 'location', {
            value: {
                hash: url,
            },
            writable: true,
        });
        expect(wrapper.find(Hero)).toHaveLength(0);
    });

    it('should render MainAppBody if a token is present', async () => {
        global.window = Object.create(window);
        const url = '#access_token=helloworld&token_type=Bearer&expires_in=69';
        Object.defineProperty(window, 'location', {
            value: {
                hash: url,
            },
            writable: true,
        });

        await ReactTestUtils.act(async () => {
            const wrapper = await mount(<App />);
            expect(wrapper.find(MainAppBody)).toHaveLength(1);
        });
    });
});
