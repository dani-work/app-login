import { createStore, combineReducers } from 'redux';
import {authReducer} from '../redux/reducers/authReducer';

const reducers = combineReducers({
    auth: authReducer
})
export const store = createStore(reducers);
