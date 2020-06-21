/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import { AUDIANCE, API_LOCAL, BASEURI, BRANDING, SERVER } from '../lib/consts';

const Login = ({ refer }) => (
  <div>
    <h1>Welcome to Voter Ambassador!</h1>
    <button onClick={login.bind(refer, "fm")}>Log in with Facebook</button>
    <br />
    <button onClick={login.bind(refer, "gm")}>Log in with Google</button>
    <br /><br />
    <div style={{fontSize: 10, width: 300}}>
      Hosted by {BRANDING.name}
      <br /><br />
      || <a href={BRANDING.termsofservice} target="_blank" rel="noopener noreferrer">Terms of Service</a>
      || <a href={BRANDING.privacypolicy} target="_blank" rel="noopener noreferrer">Privacy Policy</a>
      ||
      <br /><br />
      Legal Notice on this Software and its creator:
      <br /><br />
      Copyright (c) 2020, Our Voice USA. All rights reserved.
      <br /><br />
      This program is free software; you can redistribute it and/or
      modify it under the terms of the GNU Affero General Public License
      as published by the Free Software Foundation; either version 3
      of the License, or (at your option) any later version.
      <br /><br />
      <a href="https://github.com/OurVoiceUSA/VoterAmbassador" target="_blank" rel="noopener noreferrer">App Source Code</a>
      <br /><br />
      Built with ❤️ by Our Voice USA, a 501(c)(3) charity. Not for any candidate
      or political party. Some or all of the services provided by this instance
      of this software is governed by the entity that hosts it and may not be
      affiliated with Our Voice USA.
    </div>
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

    window.location.href = sm_oauth_url + '/'+sm+'/?aud='+AUDIANCE+'&app='+BASEURI.substr(1)+(API_LOCAL?'&local=true':'');
  } catch (e) {
    console.warn(e);
  }
}

export default Login;
