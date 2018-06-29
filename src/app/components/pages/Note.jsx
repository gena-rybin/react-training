import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import Navbar from '../common/NavbarCustom'
import './Note.css';

export default class NotePage extends Component {
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
                        Note page
                    </div>
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
