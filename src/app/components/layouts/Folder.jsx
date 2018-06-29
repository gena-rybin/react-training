import React, {Component} from 'react';
// import ListFoldersContainer from '../containers/ListFoldersContainer';
// import {bindActionCreators} from "redux";
import {connect} from "react-redux";
// import {getAllDirectoriesAction} from '../../shared/apiService';
import {STARTING_INDEX} from "../../constants";
import './Folder.css';


class Folder extends Component {

    render() {
        const {folder} = this.props;

        return (
            <li style={{marginLeft: folder.deep ? folder.deep*18+'px' : '2px'}}
                id={'f_'+folder.id}
                        // folder.selected ? 'selected' : ''}
                onClick={() => {
                    //     console.log('selection clicked');
                    this.toggleFolderIcon();
                    this.toggleClassSelected(this);
                    this.toggleClassExpandFolderIcon(this);
                    //     this.props.selected(folder);
                    //     this.props.clickedTodo(folder);
                    //     this.props.toggleCompleteTodo(folder);
                }}
            >
                    <div className="Expand ExpandOpen"></div>
                    <div className="Content">*{folder.id}*  {folder.name}, parent - {folder.parentId}</div>
            </li>
        );
    }

    toggleFolderIcon = () => {
        console.log(222222);
    };

    toggleClassSelected = data => {
        console.log(data);
        const li = window.document.getElementById('f_'+data.props.folder.id);
        const hasClass = li.classList.contains('selected');
        console.log(li);
        const liCollection = window.document.getElementsByClassName('Container')["0"].childNodes;
        for (let i=0; i<liCollection.length; i++) {
            liCollection[i].classList.remove('selected');
        }
        li.classList.add('selected');
    };

    toggleClassExpandFolderIcon = data => {
        const divExpand = window.document.getElementById('f_'+data.props.folder.id).childNodes["0"];
        const isOpened = divExpand.classList.contains('ExpandOpen');

        isOpened ? this.toggleOpenToClosed(divExpand) : this.toggleClosedToOpen(divExpand);
        console.dir(divExpand.classList);
    };

    toggleOpenToClosed = divExpand => {
        divExpand.classList.remove('ExpandOpen');
        divExpand.classList.add('ExpandClosed');
    };
    toggleClosedToOpen = divExpand => {
        divExpand.classList.remove('ExpandClosed');
        divExpand.classList.add('ExpandOpen');
    };
}


// function mapStateToProps(state) {
//     console.log('*** component...', state.folders.data);
//     return {
//         folders: state.folders.data,
//     }
// }

function mapDispatchToProps(dispatch) {
    return {
        // getAllDirectories: bindActionCreators(getAllDirectoriesAction, dispatch),
        // saveFoldersAction: bindActionCreators(saveFoldersAction, dispatch),
        // selected: bindActionCreators(selectedAction, dispatch),
        // deleteTodo: bindActionCreators(deleteTodoAction, dispatch),
        // deletedTodos: bindActionCreators(deletedTodosAction, dispatch),
        // toggleCompleteTodo: bindActionCreators(toggleCompleteAction, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(Folder);
