import React from 'react';

import Menu from '../components/Menu';

const Place2 = ({ refer }) => (
  <div>
    Hello, { refer.state.user.name }! Welcome to Place2.
    <br />
    <Menu refer={refer} />
  </div>
);

export default Place2;
