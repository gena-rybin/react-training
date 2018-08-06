import {MODAL_VISIBILITY_CREATE_NEW_FOLDER} from '../actions';

const initialState = {
    // error: {},
    isVisible: false,
    caption: {
        header: '',
        question: ''
    }
};

export default function (state=initialState, action) {
    // console.log(state, action);
    switch (action.type) {
        case MODAL_VISIBILITY_CREATE_NEW_FOLDER:
            // console.log('*** MODAL_VISIBILITY_CREATE_NEW_FOLDER');
            return {
                ...state,
                isVisible: action.payload
            };
        default: return state;
    }
}
