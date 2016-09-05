import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import cardSearchApp from './reducers.js'

const store = createStore(cardSearchApp)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
)
