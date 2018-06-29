import axios from 'axios';
import {
	CREATE_DIRECTORY,
	UPDATE_DIRECTORY,
	DELETE_DIRECTORY,
	GET_ALL_NOTICES,
	CREATE_NOTICE,
	UPDATE_NOTICE,
	DELETE_NOTICE,
	DND_NOTICES,
	BACK_END_SERVER,
	NOTICES_FAIL
} from '../constants';

import {REQUEST_FAILED,
    	GET_ALL_FOLDERS} from '../redux/actions';

function ajaxCall(callAPI) {
    return axios({
		method: callAPI.method || 'GET',
		url: callAPI.url,
		data: callAPI.data || '',
		headers: { 'Content-Type': 'application/json'}
	});
}
  
function defaultAjaxCall(dispatch, type, type_fail, callAPI, props) {
    const successHandler = response => {
        console.log(2222, response);
        dispatch({
			type: type,
			payload: response.data,
			props: props
		})
	};

	const errorHandler = error => {
        // console.log(error);
        return dispatch({
			type: type_fail, 
			isError: true,
			request: type,
			errorMessage: (error+'').split('Error: ')[1]
		})
	};

	ajaxCall(callAPI)
		.then(response => successHandler(response))
		.catch(error => errorHandler(error))
}

// ------------- Directories -------------
// get all directories from server
export const getAllDirectoriesAction = () => {
    return function(dispatch) {
        defaultAjaxCall(dispatch,
						GET_ALL_FOLDERS,
            			REQUEST_FAILED,
						{
							url: `${BACK_END_SERVER}/directories`
						});
	}
};

// create directory on server
export const createDirectoryAction = (props) => {
	return function(dispatch) {
		const parentId = (props.parentId === undefined) ? 1 : props.parentId;

		defaultAjaxCall(dispatch, 
						CREATE_DIRECTORY,
            			REQUEST_FAILED,
						{	
							method: 'POST',
							url: `${BACK_END_SERVER}/directories`,
							data: {
								parentId: parentId,
								name: props.name
							}
						});

	}
};

// delete directory on server
export const deleteDirectoryAction = (props) => {
	return function(dispatch) {
		axios.delete(`${BACK_END_SERVER}/directories/${props.id}`)
			.then(function (response) {
				dispatch(getAllDirectoriesAction());
			})
			.catch(function (error) {
				dispatch({
					type: REQUEST_FAILED,
					isError: true,
					request: DELETE_DIRECTORY
				});
			});
	}
}

// update directory on server
export const updateDirectoryAction = (props) => {
	return function(dispatch) {
		defaultAjaxCall(dispatch, 
						UPDATE_DIRECTORY,
						REQUEST_FAILED,
						{	
							method: 'PUT',
							url: `${BACK_END_SERVER}/directories/${props.id}`,
							data: {
								parentId: props.parentId,
								id: props.id,
								name: props.name
							}
						});
	}
}


// ------------- Notices -------------
// get all notices for selected directory
export const getAllNoticesAction = () => {
	return function(dispatch) {
		defaultAjaxCall(dispatch, 
						GET_ALL_NOTICES, 
						NOTICES_FAIL, 
						{	
							//url: `${BACK_END_SERVER}/notices`
						});
	}
}

// create notice on server
export const createNoticeAction = (props) => {
	return function(dispatch) {
		defaultAjaxCall(dispatch, 
						CREATE_NOTICE, 
						NOTICES_FAIL, 
						{	
							method: 'POST',
							url: `${BACK_END_SERVER}/notices`,
							data: {
								directoryId: props.directoryId,
								title: props.title,
								description: props.description,
								tags: props.tags
							}
						});
	}
}

// update notice on server
export const updateNoticeAction = (props) => {
	return function(dispatch) {
		defaultAjaxCall(dispatch, 
						UPDATE_NOTICE, 
						NOTICES_FAIL, 
						{	
							method: 'PUT',
							url: `${BACK_END_SERVER}/notices/${props.id}`,
							data: {
								id: props.id,
								directoryId: props.directoryId,
								title: props.title,
								tags: props.tags,
								description: props.description,
								position: props.position
							}
						});
	}
}

// delete notice on server
export const deleteNoticeAction = (id) => {
	return function(dispatch) {
		defaultAjaxCall(dispatch, 
						DELETE_NOTICE, 
						NOTICES_FAIL, 
						{	
							method: 'DELETE',
							url: `${BACK_END_SERVER}/notices/${id}`
						});
	}
}

// DnD Server side
export const dndNoticesActionServer = (props) => {
	return function(dispatch) {
		let promises = [];
		let notices = props.notices;
		
		for (let i = 0; i < notices.length; i++) {
			promises.push(axios.put(`${BACK_END_SERVER}/notices/${notices[i].id}`, {
				id: notices[i].id,
				directoryId: notices[i].directoryId,
				title: notices[i].title,
				tags: notices[i].tags,
				description: notices[i].description,
				position: notices[i].position
			}));
		}
		
		axios.all(promises)
			 .then(function(results) {
				dispatch({type: DND_NOTICES});
			 })
			 .catch(function (error) {
				dispatch({
					type: NOTICES_FAIL, 
					isError: true,
					request: DND_NOTICES
				});
			 });
	}
}