import {combineReducers} from 'redux';

import counterReducer from './counter';
import resultReducer from './result';

const rootReducer = combineReducers({
    counter:counterReducer,
    result:resultReducer
});
export default rootReducer;