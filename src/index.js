import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import registerServiceWorker from './scripts/registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
