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
                {accessToken === null
                    ? <SetLoginDispatch.Provider value={setAccessToken}>
                        <Hero />
                    </SetLoginDispatch.Provider>
                    : <MainAppBody token={accessToken.access_token} /> }
        </div>
    );
};

export default App;
