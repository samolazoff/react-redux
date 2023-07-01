import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, bindActionCreators} from 'redux';

import reducer from './reducer';
import * as actions from './actions';

import './index.css';

const store = createStore(reducer);
const {dispatch, getState, subscribe} =store;

const update = () => document.getElementById('counter').textContent = getState();

const {inc, dec, res, rnd} = bindActionCreators(actions, dispatch);

subscribe(update);

document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('res').addEventListener('click',  res);
document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random()*10);
    rnd(value);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>
        </>
    </React.StrictMode>
);