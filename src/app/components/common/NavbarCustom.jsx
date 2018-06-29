import React, {Component} from 'react';
import { Link, Redirect} from "react-router-dom";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './NavbarCustom.css';

export default class NavbarNote extends Component {
    state = {
        toMain: false,
        toAbout: false,
    };

    render() {
        if (this.state.toMain === true) {
            return <Redirect to='/' />
        }
        if (this.state.toAbout === true) {
            return <Redirect to='/about' />
        }

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Note Manager</Link>
                        {/*<button className={'navbar-button'} onClick={this.doGoToMainPage}>Note Manager</button>*/}
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={2} href="/note">
                            <span>Note</span>
                            {/*<button className={'navbar-button'} onClick={this.doGoToAboutPage}>About</button>*/}
                        </NavItem>
                        <NavItem eventKey={1} href="/about">
                            <span>About</span>
                            {/*<button className={'navbar-button'} onClick={this.doGoToAboutPage}>About</button>*/}
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    doGoToMainPage = () => {
        console.log(this.state);
        console.log(this.props);
        this.setState({
            toMain: true,
            toAbout: false
        });
    };
    doGoToAboutPage = () => {
        this.setState({
            toMain: false,
            toAbout: true
        });
    }

}
