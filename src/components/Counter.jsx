import React from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions';

const Counter = ({counter, inc, dec, rnd, res}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button className="btn btn-primary" onClick={dec}>DEC</button>
            <button className="btn btn-primary" onClick={inc}>INC</button>
            <button className="btn btn-danger" onClick={res}>RES</button>
            <button className="btn btn-warning" onClick={rnd}>RND</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};

export default connect(mapStateToProps, actions)(Counter);