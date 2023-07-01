import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {inc, dec, rnd, res} from './../actions';

const Counter = () => {

    const counter = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button className="btn btn-primary" onClick={()=>dispatch(dec())}>DEC</button>
            <button className="btn btn-primary" onClick={()=>dispatch(inc())}>INC</button>
            <button className="btn btn-danger" onClick={()=>dispatch(res())}>RES</button>
            <button className="btn btn-warning" onClick={()=>dispatch(rnd())}>RND</button>
        </div>
    );
};


export default Counter;