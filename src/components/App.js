import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';

import AppHeader from './AppHeader';
import Hero from './Hero';
import MainAppBody from './MainAppBody';

import { getHashParams, GlobalToken } from '../scripts/helpers';
import { isEmpty } from 'lodash';

const App = () => {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const token = getHashParams();
        if (!isEmpty(token)) {
            setAccessToken(token);
        }
    }, [setAccessToken]);

    return (
        <div className="App">
            <AppHeader />
            {accessToken === null
                ? <Hero />
                : (
                    <GlobalToken.Provider value={accessToken.access_token}>
                        <MainAppBody />
                    </GlobalToken.Provider>
                )}
        </div>
    );
};

export default App;
