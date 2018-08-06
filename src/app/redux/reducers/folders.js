import {
    SAVE_FOLDERS, GET_ALL_FOLDERS, SHOW_FOLDERS,
    REQUEST_FAILED, CREATE_DIRECTORY,
    SELECTED_FOLDER, NEW_FOLDER
} from '../actions';
import {ArrangeTreeHandler} from '../../shared/commonService';

const initialState = {
    error: {},
    folders: [],
    selectedFolder: {id: null, name: ''},
    editSelectedFolder: null,
    newFolder: {parentId: (this.selectedFolder && this.selectedFolder.id) ? this.selectedFolder.id : 1, name: ''}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_FOLDERS:
            console.log('SHOW_FOLDERS state = ', state);
            console.log('SHOW_FOLDERS action = ', action);
            return state.folders.slice();
        case SELECTED_FOLDER:
            // console.log('SELECTED_FOLDER state = ', state);
            // console.log('SELECTED_FOLDER action = ', action);
            return {
                ...state,
                selectedFolder: action.payload
            };
        case NEW_FOLDER:
            // console.log('NEW_FOLDER state = ', state);
            // console.log('NEW_FOLDER action = ', action);
            return {
                ...state,
                newFolder: action.payload
            };
        case SAVE_FOLDERS:
            console.log('SAVE_FOLDERS state = ', state);
            console.log('SAVE_FOLDERS action = ', action);
            return action.folders.slice();
        case GET_ALL_FOLDERS:
            // console.log('*** reducer GET_ALL_FOLDERS is running');
            // console.log(state, action);
            return {
                ...state,
                // data: action.payload.slice(),
                folders: ArrangeTreeHandler(action.payload)
            };
        case CREATE_DIRECTORY :
            return {
                ...state,
                folders: [...state.folders, action.payload]
            };

        // case 'MODAL_VISIBILITY':
        //     console.log('*** reducer GET_ALL_FOLDERS is running');
        //     console.log(state, action);
        //     // return {
        //     //     ...state,
        //     //     // data: action.payload.slice(),
        //     //     visibility_: true
        //     // };
        //     return  {visibility1: false};
        //     // };
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
