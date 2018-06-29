import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import axios from 'axios';
import { Button, Grid, Row, Col} from 'react-bootstrap';
import Navbar from './common/NavbarCustom';
import ActionBar from './common/ActionBar';
import ListFolders from './layouts/ListFoldersComponent';

class App extends Component {
    BACK_END_SERVER = `http://localhost:3000`;

    handleClickGETstart = () => {
        console.log('Success!');
        axios.get(`${this.BACK_END_SERVER}/`)
            .then(response => console.log(response))
    };
    handleClickGET = () => {
        console.log('Success!');
        axios.get(`${this.BACK_END_SERVER}/directories`)
            .then(response => console.log(response))
    };
    handleClickPOST = () => {
        console.log('Success!');
        axios.post(`${this.BACK_END_SERVER}/directories`,
            {
                parentId: 8,
                name: '== 3.2.1.1'
            }).then(response => console.log(response))
    };

    render() {
    return (
        <div>
            <Navbar />
            <Grid>
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
                    <button className='success' onClick={this.handleClickGET}>get directories</button>
                    <Button bsStyle="success" onClick={this.handleClickPOST}>post directories</Button>
                    <br/>
                    <button className='success' onClick={this.handleClickGETstart}>get start</button>
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
}

export default App;
