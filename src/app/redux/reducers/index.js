import { combineReducers } from 'redux';
import folders from './folders';
import modalNewFolder from './modal-new-folder';
import modalDeleteDialog from './modal-delete-dialog';

const noteApp = combineReducers({
    folders,
    modalNewFolder,
    modalDeleteDialog
});

export default noteApp
