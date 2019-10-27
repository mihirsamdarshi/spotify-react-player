import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';

import AppHeader from './AppHeader';
import Hero from './Hero';
import MainAppBody from './MainAppBody';

import { apiHost } from '../scripts/api';

const App = () => {
    // Because App is the "uppermost" component (see index.js), code in the useEffect function
    // is equivalent to an overall initialization routine. Note however that every component
    // can have its own useEffect, and so initialization can be separated on a per-component
    // basis.
    useEffect(() => apiHost('http://api.giphy.com/v1/'));
    const [loggedIn, setClientLoggedIn] = useState(false);

    // When React components are implemented as functions, their return value is the component’s
    // content (i.e., what the render() method returns for class-based components).
    return (
        <div className="App">
            <AppHeader />
            {loggedIn ? <MainAppBody /> : <Hero login={setClientLoggedIn} />}
        </div>
    );
};

export default App;
