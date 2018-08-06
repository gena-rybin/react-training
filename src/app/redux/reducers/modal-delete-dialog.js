import {MODAL_VISIBILITY_CONFIRMATION_DIALOG} from '../actions';

const initialState = {
    // error: {},
    isVisible: false,
    caption: {
        header: '',
        question: 'Do you really want to delete next folder?'
    }
};

export default function (state=initialState, action) {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
        case MODAL_VISIBILITY_CONFIRMATION_DIALOG:
            // console.log('*** MODAL_VISIBILITY_CREATE_NEW_FOLDER');
            return {
                ...state,
                isVisible: action.payload
            };
        default: return state;
    }
}
