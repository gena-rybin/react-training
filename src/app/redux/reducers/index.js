import { combineReducers } from 'redux';
import folders from './folders';

const noteApp = combineReducers({
    folders
});

export default noteApp
