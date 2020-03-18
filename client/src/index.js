import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//

import { BrowserRouter as Router } from 'react-router-dom';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://us-central1-contacts-367b9.cloudfunctions.net/api';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
