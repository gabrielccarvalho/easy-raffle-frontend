import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { getToken } from '../../services/auth';

// import { Container } from './styles';

class Main extends Component {

  async componentWillMount() {
    const token = await getToken();

    if (token == null) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div />
    );
  }
}

export default withRouter(Main);
