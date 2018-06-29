export const SAVE_FOLDERS = 'SAVE_FOLDERS';
export const GET_ALL_FOLDERS = 'GET_ALL_FOLDERS';
export const SHOW_FOLDERS = 'SHOW_FOLDERS';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export function saveFoldersAction(folders) {
    // console.log('showFoldersAction: ', folders);
    return {
        type: SAVE_FOLDERS,
        folders: folders
    }
}

