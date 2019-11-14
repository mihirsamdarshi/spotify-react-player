import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { shallow } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';


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
    let div;
    beforeEach(() => {
        div = document.createElement('div');
        ReactTestUtils.act(() => {
            ReactDOM.render(<App />, div)
        })
    });
    afterEach(() => ReactDOM.unmountComponentAtNode(div));

    it('should render Hero if no token present', () => {
        global.window = Object.create(window);
        const url = "";
        Object.defineProperty(window, "location", {
            value: {
                hash: url
            },
            writable: true
        });
        expect(div.find())
    });

    it('should render MainAppBody if a token is present', () => {
        global.window = Object.create(window);
        const url = "#access_token=helloworld&token_type=Bearer&expires_in=69";
        Object.defineProperty(window, "location", {
            value: {
                hash: url
            },
            writable: true
        });

    });
});


