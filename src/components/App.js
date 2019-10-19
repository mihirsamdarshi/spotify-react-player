import React, {Component} from 'react';

import '../stylesheets/App.scss';

import AppHeader from './AppHeader';
import MainAppBody from './MainAppBody';

import {apiHost} from '../scripts/api';

class App extends Component {
    // Because App is the "uppermost" component (see index.js), code in its componentDidMount
    // method is equivalent to an overall initialization routine. Note however that every component
    // can have its own componentDidMount, and so initialization can be separated on a per-component
    // basis.
    componentDidMount() {
        apiHost('http://api.giphy.com/v1/');
    }

    // The render method is the heart of every React component: it returns the component’s content
    // in terms of HTML and other components. It must return one and only one top-level element.
    render() {
        return (
            <div className="App">
                <AppHeader />
                <div className="app-body">
                    <MainAppBody/>
                </div>
            </div>
        );
    }
}

export default App;
