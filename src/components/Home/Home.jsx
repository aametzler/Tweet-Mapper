import React, {Component} from 'react';
import {TextField, Button} from '@material-ui/core';
import StatusService from '../../services/StatusService';

class Home extends Component {

  getStatusLocation = async () => {
    console.log(StatusService.filter);
    const data = await StatusService.filter();
    console.log('data: ', data);
  }

  render() {
    return (
      <>
        <TextField className="home-search" label="Enter Keywords" type="search" variant="filled"/>
        <Button variant="contained" color="primary" onClick={this.getStatusLocation}> Search </Button>
      </>
    );
  }
}

export default Home;