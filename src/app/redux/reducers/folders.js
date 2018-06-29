import {SAVE_FOLDERS, GET_ALL_FOLDERS, SHOW_FOLDERS,
        REQUEST_FAILED} from '../actions';
import {ArrangeTreeHandler} from '../../shared/commonService';

export default function (state=[], action) {
    switch (action.type) {
        case SHOW_FOLDERS:
            console.log('SHOW_FOLDERS state = ', state);
            console.log('SHOW_FOLDERS action = ', action);
            return state.slice();
        case SAVE_FOLDERS:
            console.log('SAVE_FOLDERS state = ', state);
            console.log('SAVE_FOLDERS action = ', action);
            return action.folders.slice();
        case GET_ALL_FOLDERS:
            // console.log('*** reducer GET_ALL_FOLDERS is running');
            return {
                ...state,
                // data: action.payload.slice(),
                data: ArrangeTreeHandler(action.payload)
            };
        case REQUEST_FAILED:
            // console.log('*** reducer REQUEST_FAILED is running');
            console.log(action);
            return {
                ...state,
                error: {
                    isError: action.isError,
                    request: 'Network error: ' + action.request,
                    errorMessage: action.errorMessage
                }
            };
        default: return state;
    }
}
