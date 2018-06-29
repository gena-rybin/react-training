import React, {Component} from 'react';
// import ListFoldersContainer from '../containers/ListFoldersContainer';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getAllDirectoriesAction} from '../../shared/apiService';
import {STARTING_INDEX} from "../../constants";
import './ListFoldersComponent.css';
import Folder from './Folder';


class ListFolders extends Component {
    componentWillMount() {
        console.log(1111, this.props);
        this.props.getAllDirectories();
    }

    componentDidMount() {
        const actionBarV = window.document.getElementById('actionBarV');
        const folders = window.document.getElementById('folders');
        if (folders) {
            folders.style.minHeight = (actionBarV && +actionBarV.offsetHeight>10) ? +actionBarV.offsetHeight+'px' : '120px';
        }
        console.dir(folders);
    }

    render() {
        const Section = (props) => {
            return <section><h1>Hi there!</h1></section>
        };
        if (!this.props.folders) {
            return null;
        }
        return (
            <div>
                { this.props.folders ? true : <Section/> }
                {/*<ListFoldersContainer/>*/}
                <ul className="Container">
                    {this.props.folders.map((folder) => {
                        if (+folder.id>STARTING_INDEX) {
                            return <Folder key={folder.id} folder={folder}/>
                            // return (<li key={folder.id}
                            //     style={{marginLeft: folder.deep ? folder.deep*18+'px' : '2px'}}
                            //     // folder.selected ? 'selected' : ''}
                            //     onClick={() => {
                            //     //     console.log('selection clicked');
                            //         this.toggleFolderIcon();
                            //     //     this.props.selected(folder);
                            //     //     this.props.clickedTodo(folder);
                            //     //     this.props.toggleCompleteTodo(folder);
                            //     }}
                            // >
                            //     <div className="Expand ExpandOpen"></div>
                            //     <div className="Content">*{folder.id}*  {folder.name}, parent - {folder.parentId}</div>
                            //
                            // </li>)
                        }
                    })}
                </ul>
            </div>
        );
    }

    toggleFolderIcon = e => {
        console.log(222222);
    };

}


function mapStateToProps(state) {
    console.log('*** component...', state.folders.data);
    return {
        folders: state.folders.data,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllDirectories: bindActionCreators(getAllDirectoriesAction, dispatch),
        // saveFoldersAction: bindActionCreators(saveFoldersAction, dispatch),
        // selected: bindActionCreators(selectedAction, dispatch),
        // deleteTodo: bindActionCreators(deleteTodoAction, dispatch),
        // deletedTodos: bindActionCreators(deletedTodosAction, dispatch),
        // toggleCompleteTodo: bindActionCreators(toggleCompleteAction, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListFolders);
