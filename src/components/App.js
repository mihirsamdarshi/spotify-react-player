import React, { useState } from 'react';
import '../stylesheets/App.scss';

import AppHeader from './AppHeader';
import Hero from './Hero';
import MainAppBody from './MainAppBody';

import { SetLoginDispatch } from '../scripts/callbacks';

const App = () => {

    const [accessToken, setAccessToken] = useState(null);

    return (
        <div className="App">
            <AppHeader />
            { console.log(accessToken)}
            <SetLoginDispatch.Provider value={setAccessToken}>
                {accessToken === null ? <Hero setAccessToken={setAccessToken} /> : <MainAppBody token={accessToken.access_token} /> }
            </SetLoginDispatch.Provider>
        </div>
    );
};

export default App;
