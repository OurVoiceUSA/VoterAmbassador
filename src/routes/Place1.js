import React from 'react';

import Menu from '../components/Menu';

const Place1 = ({ refer }) => (
  <div>
    Hello, { refer.state.user.name }! Welcome to Place1.
    <br />
    <Menu refer={refer} />
  </div>
);

export default Place1;
