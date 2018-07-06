import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';


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

export const store = createStore(reducer,applyMiddleware(logger,thunk));

