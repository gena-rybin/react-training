import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import axios from 'axios';
import {getAllDirectoriesAction} from '../shared/apiService';
import {createDirectoryAction} from '../shared/apiService';
// import {createDirectory} from '../shared/apiService_simple'; // create directory on server, BUT doesn't refresh directories-list at front

import { Button, Grid, Row, Col} from 'react-bootstrap';
import Navbar from './common/NavbarCustom';
import ActionBar from './common/ActionBar';
import ListFolders from './layouts/ListFoldersComponent';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import ModalCreateNew from "./common/ModalCreateNew";
import ModalDeleteFolder from "./common/ModalDeleteFolder";


class App extends Component {
    BACK_END_SERVER = `http://localhost:3000`;

    constructor(props, context) {
        super(props, context);

        // this.handleShow = this.handleShow.bind(this);
        // this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose = () => {
        this.setState({ show: false });
    };
    handleShow = () => {
        this.setState({ show: true });
    };

    // handleClickGETstart = () => {
    //     // console.log('Success!');
    //     axios.get(`${this.BACK_END_SERVER}/`)
    //         .then(response => console.log(response))
    // };
    // handleClickGET = () => {
    //     axios.get(`${this.BACK_END_SERVER}/directories`)
    //         .then(response => {
    //             console.log('Success get!');
    //             console.log(response);
    //         }).catch(error => {
    //             console.log(error);
    //         });
    // };
    // handleClickPOST = () => {
    //     axios.post(`${this.BACK_END_SERVER}/directories`,
    //         {
    //             parentId: 3,
    //             name: 'hello'
    //         }).then(response => {
    //             console.log('Success post!');
    //             console.log(response);
    //             this.props.getAllDirectories();
    //         }).catch(error => {
    //             console.log(error);
    //         });
    // };

    render() {
    return (
        <div>
            <Navbar />
            <Grid>
                <ModalCreateNew></ModalCreateNew>
                <ModalDeleteFolder></ModalDeleteFolder>
                <Row className="show-grid">
                    <Col id={'actionBarH'}
                         xs={12} smHidden mdHidden lgHidden>
                        <ActionBar />
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col id={'actionBarV'}
                         xsHidden sm={2} md={1} lg={1}>
                        <ActionBar />
                    </Col>
                    <Col id={'folders'}
                         xs={6} sm={5} md={4} mdOffset={1} lg={4} lgOffset={1} style={{'border': '1px solid black'}}>
                        <code>{' folders '}</code>
                        <br/>
                        <ListFolders/>
                    </Col>
                    <Col xs={6} sm={5} md={6} lg={6} style={{'backgroundColor': 'orange'}}>
                        <code>{' files'}</code>
                    </Col>
                </Row>

                <div className='container'>
                    <br/>
                    {/*<button className='success' onClick={this.handleClickGET}>get directories</button>*/}
                    {/*<Button bsStyle="success" onClick={this.createDirectoryHandler}>post directories</Button>*/}
                    <br/>
                    {/*<button className='success' onClick={this.handleClickGETstart}>get start</button>*/}
                </div>
            </Grid>
            <Row className="show-grid">
                <Col xs={6} xsOffset={6}>
                    <code>&lt;{'Col xs={6} xsOffset={6}'} /">">&gt;</code>
                </Col>
            </Row>
        </div>
    );
  }

    createDirectoryHandler = () => {
        // createDirectory(1, 'child 1')();

        createDirectoryAction({parentId: 1, name: 'child 1'})();
    };


}

// export default App;

function mapStateToProps(state) {
    console.log('*** App-component...', state);
    return {
        folders: state.folders.folders,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllDirectories: bindActionCreators(getAllDirectoriesAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
