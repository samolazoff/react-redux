import React from 'react';
import ReactDOM from 'react-dom/client';

import {createStore} from 'redux';
import './index.css';

const reducer = (state = 0, action) =>{
    switch (action.type) {
        case "INC":
            return state + 1;
        case "DEC":
            return state - 1;
        case "RES":
            return state = 0;
        case "RND":
            return state*action.payload;
        default:
            return state;
    }
};

const store = createStore(reducer);

const update = () => document.getElementById('counter').textContent = store.getState();
const inc = () => ({type:'INC'});
const dec = () => ({type:'DEC'});
const res = () => ({type:'RES'});
const rnd = (value) => ({type:'RND', payload: value})

store.subscribe(update);

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec());
});

document.getElementById('res').addEventListener('click', () => {
    store.dispatch(res());
});

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random()*10);
    store.dispatch(rnd(value));
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>
        </>
    </React.StrictMode>
);