import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { Container, Box, Message } from './styles';

class Login extends Component {
  state = {
    email: '',
    password: '',

    error: '',

    emailSelected: false,
    passwordSelected: false,
  };



  render() {
    return (
      <>
        <Container>
          <Box>
            <div>
              <img src="https://i.imgur.com/2FS62Ra.png" alt="logo"/>
            </div>
            <br /><br /><br />
            <div>
              <input
                    onFocus={() => {
                      this.setState({ emailSelected: true });
                    }}
                    onBlur={() => {
                      this.setState({ emailSelected: false });
                    }}
                    type="email"
                    spellCheck="false"
                    autoCapitalize="none"
                    placeholder={this.state.emailSelected ? '' : 'Email'}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <br></br>
                  <input
                    onFocus={() => {
                      this.setState({ passwordSelected: true });
                    }}
                    onBlur={() => {
                      this.setState({ passwordSelected: false });
                    }}
                    type="password"
                    spellCheck="false"
                    autoCapitalize="none"
                    placeholder={this.state.passwordSelected ? '' : 'Password'}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
              {this.state.error ? <Message>{this.state.error}</Message> : ''}
            </div>
            <br /><br /><br /><br /><br />
            <button type="submit">Sign In</button>
          </Box>
        </Container>
      </>
    );
  }
}

export default withRouter(Login);
