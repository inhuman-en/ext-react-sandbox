import React from 'react';
import App from './App';
import { render } from '@sencha/ext-react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

function reducer(state, action) {
    return { hello: 'hello' };
}

let store = createStore(reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('div1')
);
