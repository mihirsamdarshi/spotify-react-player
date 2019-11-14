import React, { useState } from 'react';
import '../stylesheets/App.scss';

import AppHeader from './AppHeader';
import Hero from './Hero';
import MainAppBody from './MainAppBody';

import { GlobalToken, SetLoginDispatch } from '../scripts/helpers';

const App = () => {
    const [accessToken, setAccessToken] = useState(null);

    return (
        <div className="App">
            <AppHeader />
            {accessToken === null
                ? (
                    <SetLoginDispatch.Provider value={setAccessToken}>
                        <Hero />
                    </SetLoginDispatch.Provider>
                )
                : (
                    <GlobalToken.Provider value={accessToken.access_token}>
                        <MainAppBody />
                    </GlobalToken.Provider>
                )}
        </div>
    );
};

export default App;
