import React, {Component} from 'react';
import {TextField} from '@material-ui/core';

class Home extends Component {
    render() {
        return (
            <TextField className="home-search" label="Enter Keywords" type="search" variant="filled"/>
        );
    }
}

export default Home;