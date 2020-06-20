import React from 'react';

import { BASEURI, BRANDING } from '../lib/consts';

const Menu = ({refer}) => (
  <div>
    <img src={require('../../public/'+BRANDING.logo)} alt="logo" />
    <br />
    <a href={BASEURI+'/#/place1'}>Place1</a>
    ||
    <a href={BASEURI+'/#/place2'}>Place2</a>
    ||
    <a href={BASEURI+'/#/place3'}>Place3</a>
    ||
    <br />
    <button onClick={refer.logout.bind(refer)}>Logout</button>
  </div>
);

export default Menu;
