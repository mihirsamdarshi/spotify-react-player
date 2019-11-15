import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { mount } from 'enzyme';
import App from '../components/App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('matches the snapshot', async () => {
    await ReactTestUtils.act(async () => {
        const component = await mount(<App/>);
        expect(component).toMatchSnapshot();
    });
});

describe('the App', () => {
    let div;
    beforeEach(() => {
        div = document.createElement('div');
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render Hero if no token present', async() => {
        ReactTestUtils.act(() => {
            const url = 'https://helloworld.com';
            Object.defineProperty(window, 'location', {
                value: {
                    href: url,
                    hash: '',
                },
                writable: true,
            });
        });

        await ReactTestUtils.act(async() => {
            await ReactDOM.render(<App />, div)
        });

        expect(div.querySelector('.heroInfo') !== null).toBe(true);
    });

    it('should render MainAppBody if a token is present', async() => {
        ReactTestUtils.act(() => {
            const url = '#access_token=helloworld&token_type=Bearer&expires_in=69';
            Object.defineProperty(window, 'location', {
                value: {
                    hash: url,
                },
                writable: true,
            });
        });

        await ReactTestUtils.act(async() => {
            await ReactDOM.render(<App />, div)
        });

        expect(div.querySelector('.gridContainer') !== null).toBe(true);
    });
});
