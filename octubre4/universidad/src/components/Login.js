import axios from "axios";
import React from "react";

import { GoogleLogin } from 'react-google-login';

export class Login extends React.Component {
  responseGoogle = (googleResp) => {
    console.log(googleResp);
    axios.post(`http://localhost:5000/auth/google`, { token: googleResp.tokenId })
      .then(resp => {
        console.log('todo bien, este es el token:', resp.data);
        sessionStorage.setItem('token', resp.data);
      })
      .catch(err => console.log('hubo error', err))
  }

  render() {
    return (
      <GoogleLogin
        clientId="372834564599-u9u4fk30sieg1gfdj3jg78sc02psid3j.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    );
  }
}