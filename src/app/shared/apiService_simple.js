import {
    BACK_END_SERVER,
} from '../constants';
import axios from "axios/index";



// get directories from server
export const getAllDirectories = () => {
    // return function() {
        console.log('getAllDirectories.....');
        axios.get(`${BACK_END_SERVER}/directories`)
            .then(response => {
                console.log('Success get!');
                console.log(response);
            }).catch(error => {
            console.log(error);
        });
    // }
};


// create directory on server
// BUT doesn't refresh directories-list at front
export function createDirectory(parentId, name) {
    return function () {
        console.log(444441);
        axios.post(`${BACK_END_SERVER}/directories`,
            {
                parentId: parentId,
                name: name
            }).then(response => {
            console.log('Success post!');
            console.log(response);
            // dispatch()
            getAllDirectories();
        }).catch(error => {
            console.log(error);
        });
    }
};
