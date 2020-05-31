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
  height: 500px;
  width: 450px;
  padding: 20px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  border-radius: 22px;
  background-color: #ffffff;
  -webkit-box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.5);
  box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.5);
  animation-name: FadeIn;
  animation-duration: 600ms;

  transition: box-shadow 100ms linear; /* vendorless fallback */
  -o-transition: box-shadow 100ms linear; /* opera */
  -ms-transition: box-shadow 100ms linear; /* IE 10 */
  -moz-transition: box-shadow 100ms linear; /* Firefox */
  -webkit-transition: box-shadow 100ms linear; /*safari and chrome */

  transition: transform 100ms linear; /* vendorless fallback */
  -o-transition: transform 100ms linear; /* opera */
  -ms-transition: transform 100ms linear; /* IE 10 */
  -moz-transition: transform 100ms linear; /* Firefox */
  -webkit-transition: transform 100ms linear; /*safari and chrome */

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
    border: 1px solid #3bb5ff;
    border-radius: 28px;
    margin-top: 10px;
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

  &:hover {
    -webkit-box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
    -moz-box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
    box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);

    transform: scale(1.05);
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

export const Message = styled.h6`
  font-size: 16px;
  font-weight: 300;
  font-family: sans-serif;
  color: red;
`;
