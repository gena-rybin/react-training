export const MODAL_VISIBILITY_CREATE_NEW_FOLDER = 'MODAL_VISIBILITY_CREATE_NEW_FOLDER';
export const MODAL_VISIBILITY_CONFIRMATION_DIALOG = 'MODAL_VISIBILITY_CONFIRMATION_DIALOG';
export const SAVE_FOLDERS = 'SAVE_FOLDERS';
export const GET_ALL_FOLDERS = 'GET_ALL_FOLDERS';
export const SHOW_FOLDERS = 'SHOW_FOLDERS';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const CREATE_DIRECTORY = 'CREATE_DIRECTORY';
export const SELECTED_FOLDER = 'SELECTED_FOLDER';
export const NEW_FOLDER = 'NEW_FOLDER';

export function saveFoldersAction(folders) {
    // console.log('showFoldersAction: ', folders);
    return {
        type: SAVE_FOLDERS,
        folders: folders
    }
}

export function createFolderAction(folder) {
    // console.log('action, openCloseModalCreateNewFolderAction: ', modalVisibility);
    return {
        type: CREATE_DIRECTORY,
        payload: folder
    }
}

export function modalVisibilityCreateNewFolderAction(modalVisibility) {
    // console.log('action, openCloseModalCreateNewFolderAction: ', modalVisibility);
    return {
        type: MODAL_VISIBILITY_CREATE_NEW_FOLDER,
        payload: modalVisibility
    }
}

export function modalVisibilityConfirmationDialogAction(modalVisibility) {
    // console.log('action, modalVisibilityConfirmationDialogAction: ', modalVisibility);
    return {
        type: MODAL_VISIBILITY_CONFIRMATION_DIALOG,
        payload: modalVisibility
    }
}

export function setSelectedFolderAction(folder) {
    // console.log('action, setSelectedFolderAction: ', folder);
    return {
        type: SELECTED_FOLDER,
        payload: folder
    }
}

export function setNewFolderAction(folder) {
    // console.log('action, setNewFolderAction: ', folder);
    return {
        type: NEW_FOLDER,
        payload: folder
    }
}

export function deleteFolderAction(folder) {
    // console.log('action, setNewFolderAction: ', folder);
    return {
        type: NEW_FOLDER,
        payload: folder
    }
}
// export function modalVisibilityAction(modalVisibility) {
//     console.log('action, openCloseModalCreateNewFolderAction: ', modalVisibility);
//     return {
//         type: 'MODAL_VISIBILITY',
//         modalVisibility: modalVisibility || false
//     }
// }

