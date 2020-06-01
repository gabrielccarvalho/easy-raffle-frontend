import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import LoginProvider from '../../providers/LoginProvider';
import { login } from '../../services/auth';

import { Container, Box, RegisterBox, Message } from './styles';

class Login extends Component {
  state = {
    email: '',
    password: '',

    error: '',

    emailSelected: false,
    passwordSelected: false,
  };

  handleLogin = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({
        error: 'Fill the email and password fields to keep going!',
      });
    } else {
      this.setState({ error: '' });
      try {
        const LProvider = new LoginProvider();
        const response = await LProvider.login(email, password);
        await login(response.data.token, response.data.user);
        this.props.history.push('/');
      } catch (err) {
        this.setState({
          error:
            'Please, verify if you typed your email and password correctly',
        });
      }
    }
  };

  render() {
    return (
      <>
        <Container>
          <Box onSubmit={this.handleLogin}>
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
              {
                this.state.error ?
                <Message>{this.state.error}</Message> :
                null
              }
            </div>
            <button type="submit">Sign In</button>
          </Box>
          <RegisterBox>
            <small>New around here?</small>{' '}
            <a href="/Register">Create an account</a>
            <small>.</small>
          </RegisterBox>
        </Container>
      </>
    );
  }
}

export default withRouter(Login);
