import React                from 'react';
import {render}             from 'react-dom';
import {Router}             from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Provider}           from 'react-redux';
import {fromJS}             from 'immutable';
import * as reducers        from 'reducers';
import routes               from 'routes';
import promiseMiddleware    from 'lib/promiseMiddleware';
import {applyMiddleware,
        combineReducers,
        createStore}        from 'redux';


let initialState = window.__INITIAL_STATE__;
console.log(initialState);
// Transform into Immutable.js collections,
// but leave the top level keys untouched for Redux
const history = createBrowserHistory();

Object
    .keys(initialState)
    .forEach(key => {
        initialState[key] = fromJS(initialState[key]);
    });

const reducer = combineReducers(reducers);
const store   = applyMiddleware(promiseMiddleware)(createStore)(reducer);

render(
    <Provider store={store}>
        <Router children={routes} history={history} />
    </Provider>,
    document.getElementById('react-view')
);