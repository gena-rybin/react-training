import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './ModalDeleteFolder.css';
import {connect} from "react-redux";
import {isVisibleModalConfDialog} from '../../redux/actions/index';
import {deleteFolderAction} from '../../redux/actions/index';
import {bindActionCreators} from "redux";
import {deleteDirectoryAction} from "../../shared/apiService";
import {modalVisibilityConfirmationDialogAction} from "../../redux/actions";
import {MODAL_VISIBILITY_CONFIRMATION_DIALOG} from '../../redux/actions';
import {STARTING_INDEX} from '../../constants';


class ModalDeleteFolder extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isDisabled: true
        };
    }

    yesButtonHandler = (action) => {
        switch (action) {
            case MODAL_VISIBILITY_CONFIRMATION_DIALOG:
                if (this.props.selectedFolder.id) {
                    deleteDirectoryAction({id: this.props.selectedFolder.id})();
                }
            default: return action;
        }
    };


    render() {
        const { isDisabled } = this.state;
        // const folderSelected =
        return (
            <div>
                <Modal show={this.props.show} onHide={() => this.props.setModalVisibility(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation dialog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            {this.props.caption.question}
                            <br/>
                            <pre>{JSON.stringify(this.props.selectedFolder, null,2)}</pre>
                            {/*{this.props.selectedFolder}*/}
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        {/*<Col smOffset={2} sm={10}>*/}
                        <Button bsStyle="danger"
                                disabled={!(this.props.selectedFolder.id > STARTING_INDEX)}
                                onClick={() => this.yesButtonHandler(MODAL_VISIBILITY_CONFIRMATION_DIALOG)}>
                            Yes
                        </Button>
                        {/*</Col>*/}

                        <Button bsStyle="success"
                                onClick={() => this.props.setModalVisibility(false)}>No</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    }
}

function mapStateToProps(state) {
    console.log('*** AppComponent...', state);
    return {
        show: state.modalDeleteDialog.isVisible,
        caption: state.modalDeleteDialog.caption,
        selectedFolder: state.folders.selectedFolder,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setModalVisibility: bindActionCreators(modalVisibilityConfirmationDialogAction, dispatch),
        deleteFolder: bindActionCreators(deleteFolderAction, dispatch),
        // setNewFolder: bindActionCreators(setNewFolderAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalDeleteFolder);
