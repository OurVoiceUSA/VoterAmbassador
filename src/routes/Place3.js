import React from 'react';

import Menu from '../components/Menu';

const Place3 = ({ refer }) => (
  <div>
    Hello, { refer.state.user.name }! Welcome to Place3.
    <br />
    <Menu refer={refer} />
  </div>
);

export default Place3;
