import ReactDOM from 'react-dom';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

import Hero from '../components/Hero';

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
            ReactDOM.render(<Hero />, div);
        });
    });
    afterEach(() => ReactDOM.unmountComponentAtNode(div));

    it('should have an h1 tag', () => {
        const titleHeader = div.querySelector('h1');
        expect(titleHeader).toBeDefined();
    });

    it('should have an h3 tag', () => {
        const subtitleHeader = div.querySelector('h3');
        expect(subtitleHeader).toBeDefined();
    });

    it('should have a p tag', () => {
        const disclaimer = div.querySelector('p');
        expect(disclaimer).toBeDefined();
    });

    describe('the button', () => {
        it('should redirect upon click', () => {
            const button = div.querySelector('a');
            ReactTestUtils.act(() => {
                ReactTestUtils.Simulate.click(button);
            });
        });
    });
});
