import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import RegisterProvider from '../../providers/RegisterProvider';

import { Container, Box, LoginBox, Message } from './styles';

class Login extends Component {
  state = {
    name: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',

    error: '',

    nameSelected: false,
    emailSelected: false,
    cpfSelected: false,
    passwordSelected: false,
    confirmPasswordSelected: false,
  };

  handleRegister = async e => {
    e.preventDefault();
    const { name, email, cpf, password, confirmPassword } = this.state;
    if (!name || !email || !cpf || !password || !confirmPassword) {
      this.setState({
        error: 'Fill all the fields to keep going!',
      });
    } else if (password !== confirmPassword) {
      this.setState({
        error: 'Passwords do not match.',
      });
    } else {
      this.setState({ error: '' });
      try {
        const RProvider = new RegisterProvider();
        const response = await RProvider.register(name, email, cpf, password);
        console.log(response.data);
        this.props.history.push('/login');
      } catch (err) {
        this.setState({
          error:
            'Please, verify if you typed everything correctly',
        });
        console.log(err);
      }
    }
  };

  handleCpf = (cpf) => {
    var numeric = cpf.replace(/[^0-9]+/g, '');
    var length = numeric.length;

    var partOne = numeric.slice(0, 3) + ".";
    var partTwo = numeric.slice(3, 6) + ".";
    var partThree = numeric.slice(6, 9) + "-";

    var input = document.getElementById("cpf");

    var formated;

    if (length < 4) {
      input.value = numeric;
    } else if (length >= 4 && length < 7) {
      formated = partOne + numeric.slice(3);
      input.value = formated;
    } else if (length >= 7 && length < 10) {
      formated = partOne + partTwo + numeric.slice(6);
      input.value = formated;
    } else if (length >= 10 && length < 12) {
      formated = partOne + partTwo + partThree + numeric.slice(9);
      input.value = formated;
    } else if (length >= 12) {
      formated = partOne + partTwo + partThree + numeric.slice(9, 11);
      input.value = formated;
    }
  }
  render() {
    return (
      <>
        <Container>
          <Box onSubmit={this.handleRegister}>
            <div>
              <img src="https://i.imgur.com/2FS62Ra.png" alt="logo"/>
            </div>
            <br /><br /><br />
            <div>
              <input
                onFocus={() => {
                  this.setState({ nameSelected: true });
                }}
                onBlur={() => {
                  this.setState({ nameSelected: false });
                }}
                type="text"
                spellCheck="false"
                autoCapitalize="false"
                placeholder={this.state.nameSelected ? '' : 'Name'}
                onChange={e => this.setState({ name: e.target.value })}
              />
              <br/>
              <input
                onFocus={() => {
                  this.setState({ cpfSelected: true });
                }}
                onBlur={() => {
                  this.setState({ cpfSelected: false });
                }}
                type="text"
                id="cpf"
                spellCheck="false"
                autoCapitalize="false"
                placeholder={this.state.cpfSelected ? '' : '000.000.000-00'}
                onInput={e => this.handleCpf(e.target.value)}
                onChange={e => this.setState({ cpf: e.target.value })}
              />
              <br />
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
              <br/>
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
              <br />
              <input
                onFocus={() => {
                  this.setState({ confirmPasswordSelected: true });
                }}
                onBlur={() => {
                  this.setState({ confirmPasswordSelected: false });
                }}
                type="password"
                spellCheck="false"
                autoCapitalize="none"
                placeholder={this.state.confirmPasswordSelected ? '' : 'Confirm your password'}
                onChange={e => this.setState({ confirmPassword: e.target.value })}
              />
              <Message>{this.state.error}</Message>
            </div>
            <button type="submit">Register</button>
          </Box>
          <LoginBox>
            <small>Not a new member?</small>{' '}
            <a href="/login">Log in</a>
            <small>.</small>
          </LoginBox>
        </Container>
      </>
    );
  }
}

export default withRouter(Login);
