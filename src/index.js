import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRouterDOM from "react-router-dom";

import App from './app/components/App';
import NotePage from './app/components/pages/Note';
import AboutPage from './app/components/pages/About';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';import noteApp from "./app/redux/reducers/index";
import {Provider} from "react-redux";

import './index.css';

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;

const store = createStore(noteApp, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/note" component={NotePage} />
                <Route exact path="/about" component={AboutPage} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

