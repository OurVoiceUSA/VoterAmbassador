/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import { AUDIANCE, APPPATH, API_LOCAL, SERVER } from '../lib/consts';

const Login = ({ refer }) => (
  <div>
    <h1>Welcome to Voter Ambassador!</h1>
    <button onClick={login.bind(refer, "fm")}>Log in with Facebook</button>
    <br />
    <button onClick={login.bind(refer, "gm")}>Log in with Google</button>
  </div>
);

export async function login (sm) {
  let token;

  this.setState({loading: true});

  try {
    let res = await fetch(SERVER +'/hello', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + (token ? token : 'of the one ring'),
        'Content-Type': 'application/json'
      },
    });

    let sm_oauth_url = res.headers.get('x-sm-oauth-url');

    if (!sm_oauth_url) throw new Error("Missing required header.");

    if (res.status >= 400)
      window.location.href = sm_oauth_url + '/'+sm+'/?aud='+AUDIANCE+'&app='+APPPATH+(API_LOCAL?'&local=true':'');
  } catch (e) {
    console.warn(e);
  }
}

export default Login;
