import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from "axios/index";
import {saveFoldersAction} from '../../redux/actions'  // new "state", because "reducer" is in separate file from todos.js and added in combineReducers
import {ArrangeTreeHandler} from "../../shared/commonService";

class ListFoldersContainer extends Component {
    BACK_END_SERVER = `http://localhost:3000`;
    folders = [];

    componentWillMount() {
        this.getFoldersFromServer();
        // getAllDirectoriesAction();
    }

    // componentDidMount() {
    //     ReactDOM.findDOMNode(this).addEventListener('click', (event) => {
    //         event.stopPropagation();
    //     }, false);
    // }

    getFoldersFromServer = () => {
        axios.get(`${this.BACK_END_SERVER}/directories`)
            .then(response => {
                // console.log(response);
                this.folders = ArrangeTreeHandler(response.data.slice());
                console.log(this.folders);
                this.props.saveFoldersAction(this.folders);
            });
    };

    // -----------------------------------------------

    // -----------------------------------------------

    // handleClick = e => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     e.stopImmediatePropagation();
    //     e.nativeEvent.stopImmediatePropagation();
    // };

    render() {
        return false;
        // let completedClass = folder.completed ? 'completed-todo' : 'not-completed-todo';
        // let selectedClass = folder.selected ? 'selected-todo' : false;
        return (
            <div>
                {this.props.folders.map((folder) =>
                    <li key={folder.id}
                        className={`${folder.completed ? 'completed-todo' : 'not-completed-todo'}
                                    ${folder.selected ? 'selected-todo' : false}`}
                        // style={{fontWeight: folder.selected ? 'bold' : 'inherit'}}
                        // folder.selected ? 'selected' : ''}
                        // onClick={() => {
                        //     console.log('selection clicked');
                        //     this.props.selected(folder);
                        //     this.props.clickedTodo(folder);
                        //     this.props.toggleCompleteTodo(folder);
                        // }}
                    >
                        *{folder.id}*  {folder.name}, parent - {folder.parentId}
                    </li>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        folders: state.folders,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveFoldersAction: bindActionCreators(saveFoldersAction, dispatch),
        // selected: bindActionCreators(selectedAction, dispatch),
        // deleteTodo: bindActionCreators(deleteTodoAction, dispatch),
        // deletedTodos: bindActionCreators(deletedTodosAction, dispatch),
        // toggleCompleteTodo: bindActionCreators(toggleCompleteAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFoldersContainer);
