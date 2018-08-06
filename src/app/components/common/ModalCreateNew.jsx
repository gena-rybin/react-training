import React, {Component} from 'react';
import {Modal, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import './ModalDeleteFolder.css';
import {connect} from "react-redux";
import {modalVisibilityCreateNewFolderAction} from '../../redux/actions/index';
import {setNewFolderAction} from '../../redux/actions/index';
import {bindActionCreators} from "redux";
import {createDirectoryAction} from "../../shared/apiService";
// import {createDirectory} from '../../shared/apiService_simple'; // create directory on server, BUT doesn't refresh directories-list at front


class ModalDeleteFolder extends Component {
    idDivider = 'id=';

    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.valueFolderName = undefined;

        this.state = {
            valueParentId: '',
            newFolder: {parentId: 1, name: ''}
        };
    }

    getValidationStateParentId() {
        const length = this.state.valueParentId.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        const parentId = this.getParentIdFromSelect(e.target.value);
        this.setState({ valueParentId: parentId });
    }

    getParentIdFromSelect = data => {
        return +data.split(this.idDivider)[1];
    };

    createDirectoryHandler = () => {
        // createDirectory(1, 'child 1')();

        // console.log(this.props.newFolder);
        createDirectoryAction(this.props.newFolder)();
    };

    handleNameChange = (e) => {
        let data = e.target.value;
        this.setState(prevState => ({
            newFolder: {
                ...prevState.newFolder,
                name: data
            }
        }), this.setNewFolderToRedux);
    };

    handleParentIdChange = (e) => {
        const parentId = this.getParentIdFromSelect(e.target.value);
        this.setState(prevState => ({
            newFolder: {
                ...prevState.newFolder,
                parentId: parentId
            }
        }), this.setNewFolderToRedux);
    };

    setNewFolderToRedux = () => {
        this.props.setNewFolder(this.state.newFolder);
    };

    render() {
        if (!this.props.folders) {
            return null;
        }

        return (
            <div>
                <Modal show={this.props.show} onHide={() => this.props.setModalVisibility(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new folder</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form >
                            <FormGroup controlId="formControlsSelect1">
                                <ControlLabel>parent folder:</ControlLabel>
                                <FormControl componentClass="select" placeholder="select parent folder..."
                                             defaultValue={this.props.selectedFolder.id + ', ' + this.idDivider + this.props.selectedFolder.id}
                                             onChange={this.handleParentIdChange}>
                                    {this.props.folders.map((folder) =>
                                        <option value={folder.id + ', ' + this.idDivider + folder.id}
                                                id={this.idDivider + folder.id}
                                                key={folder.id}>{folder.id + ', ' + folder.name}</option>)
                                    }
                                </FormControl>
                            </FormGroup>

                            <FormGroup controlId="formSelectParentId"
                                       validationState={this.getValidationStateParentId()}>
                                <ControlLabel>Folder's name:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.newFolder.name}
                                    placeholder="Enter name"
                                    onChange={this.handleNameChange}/>
                                <FormControl.Feedback />
                                {/*<HelpBlock>Validation is based on string length.</HelpBlock>*/}
                            </FormGroup>

                            <pre>{JSON.stringify(this.props.folders, null,2)}</pre>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        {/*<Col smOffset={2} sm={10}>*/}
                            <Button bsStyle="success"
                                    onClick={this.createDirectoryHandler}>
                                Create folder
                            </Button>
                        {/*</Col>*/}

                        <Button onClick={() => this.props.setModalVisibility(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    }
}

function mapStateToProps(state) {
    console.log('*** AppComponent...', state);
    return {
        show: state.modalNewFolder.isVisible,
        folders: state.folders.folders,
        selectedFolder: state.folders.selectedFolder,
        newFolder: state.folders.newFolder
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setModalVisibility: bindActionCreators(modalVisibilityCreateNewFolderAction, dispatch),
        setNewFolder: bindActionCreators(setNewFolderAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalDeleteFolder);
