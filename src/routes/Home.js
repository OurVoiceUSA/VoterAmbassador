import React from 'react';

import Menu from '../components/Menu';

const Home = ({ refer }) => (
  <div>
    Hello, { refer.state.user.name }! Welcome to Home.
    <br />
    <Menu refer={refer} />
  </div>
);

export default Home;
