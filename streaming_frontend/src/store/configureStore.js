import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import token from './token';
import pexels from './pexels';
import pexel_by_id from './pexel_by_id';

const middleware =  (getDefaultMiddleware) => [...getDefaultMiddleware()];
const reducer = combineReducers({token,pexels,pexel_by_id});
const store = configureStore({reducer,middleware});

export default store;
