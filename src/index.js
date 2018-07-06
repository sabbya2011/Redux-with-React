import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux';

import {createStore,applyMiddleware} from 'redux';
import reducer from './store/reducers/reducer';
import thunk from 'redux-thunk';

import App from './App';
import registerServiceWorker from './registerServiceWorker';



const logger = store => {
    return next => {
        return action => {
            console.log(`[Middleware] ${JSON.stringify(action,undefined,2)}`);
            const result = next(action);
            console.log(`[Middleware] result ${JSON.stringify(result,undefined,2)}`);
            return result;
        }
    }
}

const store = createStore(reducer,applyMiddleware(logger,thunk));

ReactDOM.render(<Provider store = {store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
