import ReactDOM from 'react-dom';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import { isEmpty } from 'lodash';

import Hero from '../components/Hero';
import { getHashParams } from '../scripts/helpers';


it('renders the Hero component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hero />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should initialize with text', () => {
    const component = TestRenderer.create(<Hero />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

describe('the hero component', () => {
    let div;
    beforeEach(() => {
        div = document.createElement('div');
        ReactTestUtils.act(() => {
            ReactDOM.render(<Hero />, div)
        })
    });
    afterEach(() => ReactDOM.unmountComponentAtNode(div));

    it('should have an h1 tag', () => {
        const titleHeader = div.querySelector('h1')
        expect(titleHeader).toBeDefined();
    });

    it('should have an h3 tag', () => {
        const subtitleHeader = div.querySelector('h3')
        expect(subtitleHeader).toBeDefined();
    });

    it('should have a p tag', () => {
        const disclaimer = div.querySelector('p')
        expect(disclaimer).toBeDefined();
    });

    describe('the button', () => {
        it('should redirect upon click', () => {
            const button = div.querySelector('a');
            ReactTestUtils.act(() => {
                ReactTestUtils.Simulate.click(button);
            })
        });
    });

    it('should return null for hash params', () => {
        expect(isEmpty(getHashParams())).toBe(true);
    });

    it('should return a value for hash params', () => {
        const output = {"access_token": "helloworld", "expires_in": "69", "token_type": "Bearer"};
        global.window = Object.create(window);
        const url = "#access_token=helloworld&token_type=Bearer&expires_in=69";
        Object.defineProperty(window, "location", {
            value: {
                hash: url
            },
            writable: true
        });
        expect(getHashParams()).toStrictEqual(output);
    });
});
