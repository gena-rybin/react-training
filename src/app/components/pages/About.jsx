import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import './About.css';
import Navbar from '../common/NavbarCustom';

export default class AboutPage extends Component {
    state = {
        toMain: false,
    };

    render() {
        if (this.state.toMain === true) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <Navbar />
                <div className={'container'}>
                    <div>
                        The name of the application is “Note Manager”.
                        The application helps users create, edit, and delete their personal notes, and maintain the structure of folders and tags.
                    </div>
                    <br/>
                    <Link to="/">
                        <button className="btn btn-info">back to main</button>
                    </Link>
                    <button className="btn btn-info" onClick={this.doGoToMainPage}>back to main (P)</button>
                </div>
            </div>
        );
    }

    doGoToMainPage = () => {
        this.setState({
            toMain: true
        });
    }

}
