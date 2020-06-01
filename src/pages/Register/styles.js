import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
`;

export const Box = styled.form`
  height: 600px;
  width: 450px;
  padding: 20px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  border-radius: 22px;
  background-color: #ffffff;
  -webkit-box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
  box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
  animation-name: FadeIn;
  animation-duration: 600ms;

  small {
    font-size: 16px;
    font-weight: 300;
    font-family: sans-serif;
  }

  br {
    margin-top: 30px;
  }

  img {
    width: 200px;
    height: 50px;
  }

  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    color: #777;
    font-size: 15px;
    width: 60%;
    border: 0px;
    outline: 0;
    transition: all 500ms ease-in-out;
    border-bottom: 1px solid #c3cad9;
    text-align: center;
    &:focus {
      width: 80%;
      border-bottom: 2px solid #3bb5ff;
    }
    &:invalid {
      border-bottom: 2px solid red;
    }
  }

  div {
    margin-top: 30px;
  }

  button {
    color: #3bb5ff;
    font-size: 20px;
    font-weight: bold;
    background: #fff;
    height: 50px;
    width: 60%;
    margin-top: 25px;
    border: 1px solid #3bb5ff;
    border-radius: 28px;
    transition: 500ms;
    &:hover {
      color: #fff;
      background: #3bb5ff;
      width: 80%;
    }
    &:focus {
      outline-width: 0;
    }
  }

  @keyframes FadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes error {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-30);
      transform: translateX(0);
    }
  }
`;

export const LoginBox = styled.form`
  height: 60px;
  width: 450px;
  margin-top: 30px;
  padding: 20px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: #ffffff;
  -webkit-box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
  box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
  animation-name: MoveFromRight;
  animation-duration: 1s;
  animation-delay: 600ms;
  animation-fill-mode: backwards;
  a {
    font-size: 16px;
    font-weight: 300;
    font-family: sans-serif;
    text-decoration: none;
    color: #005eff;
  }
  small {
    font-size: 16px;
    font-weight: 300;
    font-family: sans-serif;
  }
  @keyframes MoveFromRight {
    from {
      opacity: 0;
      transform: translateX(50%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

export const Message = styled.h6`
  font-size: 16px;
  font-weight: 300;
  font-family: sans-serif;
  color: red;
`;
